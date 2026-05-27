import { useNavigate } from "react-router-dom";

export default function PaymentFailed() {
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
      }}
    >
      <h1 style={{ color: "red" }}>
        ✕ Payment Failed
      </h1>

      <button
        onClick={() => navigate("/checkout")}
        style={{
          marginTop: 20,
          padding: "14px 30px",
          borderRadius: 50,
          border: "none",
          background: "#1a1a1a",
          color: "white",
        }}
      >
        Try Again
      </button>
    </div>
  );
}