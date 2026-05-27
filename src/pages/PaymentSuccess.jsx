import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FAF9F6",
        padding: 20,
      }}
    >
      <h1 style={{ color: "#4caf50" }}>
        ✓ Payment Successful
      </h1>

      <p>Your order has been placed</p>

      <button
        onClick={() => navigate("/orders")}
        style={{
          marginTop: 20,
          padding: "14px 30px",
          borderRadius: 50,
          border: "none",
          background: "#1a1a1a",
          color: "white",
          cursor: "pointer",
        }}
      >
        View Orders
      </button>
    </div>
  );
}