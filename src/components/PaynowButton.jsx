import axios from 'axios';
import React from 'react'

const handlePayment = async () => {
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


const PaynowButton = () => {
  return (
    <div>
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
  )
}

export default PaynowButton
