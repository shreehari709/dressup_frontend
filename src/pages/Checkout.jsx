import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

export default function Checkout() {
  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useCart();

  const { placeOrder } = useOrders();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
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
          placeholder="Pin Code"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          style={inputStyle}
        />
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
}

const inputStyle = {
  padding: 16,
  borderRadius: 14,
  border: "1px solid #ddd",
  outline: "none",
  fontSize: 14,
  background: "white",
};