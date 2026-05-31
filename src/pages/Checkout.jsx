import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";
import { Axis3DIcon } from "lucide-react";
import axios from "axios";

export default function Checkout() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchRazorpay = async () => {
  //     const responseRazorpay = await axios.post(backend_ur + "/order/placeorder/razorpay");

  //     if (responseRazorpay.data.success) {
  //       console.log(responseRazorpay.data.message);
  //     }
  //   };

  //   fetchRazorpay();
  // }, []);

  const { cart, totalPrice, clearCart } = useCart();

  const { placeOrder } = useOrders();



  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [pin, setPin] = useState("");
  const [upi, setUpi] = useState("");

  const handlePayment = () => {
    if (!name || !address || !pin || !upi) {
      alert("Please fill all fields");
      return;
    }

    const success = Math.random() > 0.3;

    if (success) {
      const order = {
        id: "ORD" + Date.now(),
        items: cart,
        total: totalPrice,
        customer: name,
        address,
        pin,
        paymentMethod: "UPI",
        date: new Date().toLocaleDateString(),
        deliveryDate: new Date(
          Date.now() + 5 * 24 * 60 * 60 * 1000
        ).toLocaleDateString(),
      };

      placeOrder(order);

      clearCart();

      navigate("/payment-success");
    } else {
      navigate("/payment-failed");
    }
  };

  return (
    <div
      style={{
        background: "#FAF9F6",
        minHeight: "100vh",
        padding: 20,
        fontWeight: 700,
        marginTop: 70 
      }}
    >
         {/* <button
      onClick={() => navigate("/auth")}
      className="
        fixed
        top-4
        right-4
        z-50
        bg-linear-to-r
        from-pink-400
        to-rose-400
        text-white
        px-5
        py-2.5
        rounded-full
        font-semibold
        text-sm
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Login/Register
    </button> */}

      <h2>Checkout</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 20,
        }}
      >
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            ...inputStyle,
            minHeight: 100,
          }}
        />

        <input
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          style={inputStyle}
        />
      

        <input
          placeholder="Pin Code"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          style={inputStyle}
        />
{/* 
        <input
          placeholder="UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          style={inputStyle}
        /> */}
      </div>

      <div
        style={{
          marginTop: 30,
          background: "white",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <h3>Total: ₹{totalPrice}</h3>

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

  const UpdateProfile = (name, address, contact) => {
    // Logic to update the user's profile information
    // This could involve making an API call to the backend to save the updated details
    console.log("Profile Updated:", { name, address, contact });
  };
  
  if(checkoutSuccess) {
    return <PaymentSuccess />;
  } else if(checkoutFailed) {
    return <PaymentFailed />;
  }  

}

const inputStyle = {
  padding: 16,
  borderRadius: 14,
  border: "1px solid #ddd",
  outline: "none",
  fontSize: 14,
  background: "white",
};