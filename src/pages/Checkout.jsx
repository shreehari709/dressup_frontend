import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { backendUrl, razorpayKeyId } from "../config";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const { clearCart } = useCart();
  const { placeOrder } = useOrders();

  const orderData = location.state;

  const [formData, setFormData] = useState({
    name: orderData?.name || "",
    address: "",
    city: "",
    state: "",
    contact: orderData?.contactNumber || "",
    pincode: "",
  });

  const total = orderData?.total || 0;



  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script =
        document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (
      !formData.name ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.contact ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    const loaded =
      await loadRazorpay();

    if (!loaded) {
      alert(
        "Failed to load Razorpay"
      );
      return;
    }

    try {
      const response =
        await axios.post(
          `${backendUrl}/order/razorpay`,
          {
            amount: total,
            items: orderData.items,
            address: formData,
          }
        );

      const order =
        response.data.order;

      const options = {
        key: razorpayKeyId,
        amount: order.amount,

        currency: order.currency,

        name: "Phool Si Pyari",

        description:
          "Order Payment",

        order_id: order.id,

        handler: async function (
          paymentResponse
        ) {
          const newOrder = {
            orderId:
              paymentResponse.razorpay_payment_id,

            items:
              orderData.items,

            customer:
              formData.name,

            email:
              orderData.email,

            contact:
              formData.contact,

            address:
              formData.address,

            total,

            date:
              new Date().toLocaleDateString(),

            deliveryDate:
              new Date(
                Date.now() +
                  5 *
                    24 *
                    60 *
                    60 *
                    1000
              ).toLocaleDateString(),
          };

          placeOrder(newOrder);

          clearCart();

          navigate(
            "/payment-success"
          );
        },

        prefill: {
          name:
            formData.name,

          email:
            orderData.email,

          contact:
            formData.contact,
        },

        theme: {
          color: "#C9848A",
        },
      };

      const razor =
        new window.Razorpay(
          options
        );

      razor.on(
        "payment.failed",
        () => {
          navigate(
            "/payment-failed"
          );
        }
      );

      razor.open();
    } catch (error) {
      console.log(error);

      alert(
        "Payment initialization failed"
      );
    }
  };

  return (
    <div
      style={{
        background: "#FAF9F6",
        minHeight: "100vh",
        padding: 20,
        marginTop: 70,
      }}
    >
      <h2>Checkout</h2>

      <CheckoutForm
        formData={formData}
        setFormData={setFormData}
      />

      <div
        style={{
          marginTop: 30,
          background: "white",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h3>
          Total : ₹
          {total.toLocaleString()}
        </h3>

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            background: "#1a1a1a",
            color: "white",
            border: "none",
            borderRadius: 50,
            padding: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}