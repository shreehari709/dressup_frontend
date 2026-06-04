import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";



export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();
const navigate = useNavigate();

const token = localStorage.getItem("token");

const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

const isLoggedIn = !!token;


  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


const [loginError, setLoginError] = useState("");

const handleCheckout = () => {
  if (!isLoggedIn) {
    setLoginError("Please login before checkout");
    return;
  }

  const checkoutData = {
    customer: {
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
    },

    items: cart.map(item => ({
    productId: item.id,
    name: item.name,
    image: item.images?.[0] || item.images,
    size: item.selectedSize,
    qty: item.qty,
    price: item.price
  })),

  totalItems: cart.reduce(
    (sum, item) => sum + item.qty,
    0
  ),

  subtotal,
  shipping,
  total
};

  navigate("/checkout", {
    state: checkoutData,
  });
};


  const shipping = subtotal > 3000 ? 0 : 99;

  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          padding: 40,
          background: "#FAF9F6",
        }}
      >
        <p style={{ fontSize: 52, margin: "0 0 16px" }}>
          🛍️
        </p>

        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#1a1a1a",
            margin: "0 0 8px",
          }}
        >
          Your bag is empty
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#999",
          }}
        >
          Add items to see them here
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#FAF9F6",
        minHeight: "100vh",
        paddingBottom: 140,
      }}
    >
      {/* Search */}
      <div style={{ padding: "14px 20px 8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "white",
            borderRadius: 50,
            padding: "10px 16px",
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
            border: "1px solid #f0ece8",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            placeholder="Search in bag..."
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: 13,
              color: "#333",
              background: "transparent",
            }}
          />
        </div>
      </div>

      {/* Cart Items */}
      <div style={{ padding: "8px 20px 0" }}>
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}`}
            style={{
              background: "white",
              borderRadius: 20,
              marginBottom: 12,
              padding: "12px 14px",
              display: "flex",
              gap: 12,
              alignItems: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            {/* Product Image */}
            <div
              style={{
                width: 70,
                height: 80,
                borderRadius: 14,
                background: "#f5ede8",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={item.images?.[0] || item.images}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Product Info */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  color: "#C9848A",
                  margin: "0 0 2px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {item.category}
              </p>

              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  margin: "0 0 4px",
                  lineHeight: 1.3,
                }}
              >
                {item.name}
              </p>

              {/* Size */}
              <p
                style={{
                  fontSize: 11,
                  color: "#777",
                  margin: "0 0 8px",
                }}
              >
                Size: {item.selectedSize}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Price */}
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#1a1a1a",
                  }}
                >
                  ₹
                  {(
                    item.price * item.qty
                  ).toLocaleString()}
                </span>

                {/* Quantity */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <button
                    onClick={() =>
                      updateQty(
                        item.id,
                        item.selectedSize,
                        -1
                      )
                    }
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "#f0ece8",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    −
                  </button>

                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      minWidth: 16,
                      textAlign: "center",
                    }}
                  >
                    {item.qty}
                  </span>

                  <button
                    onClick={() =>
                      updateQty(
                        item.id,
                        item.selectedSize,
                        1
                      )
                    }
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "#1a1a1a",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Remove */}
            <button
              onClick={() =>
                removeFromCart(
                  item.id,
                  item.selectedSize
                )
              }
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ccc",
                fontSize: 16,
                alignSelf: "flex-start",
                padding: 0,
              }}
            >
              ✕
            </button>
          </div>
        ))}

        {/* Order Summary */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "16px 18px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            marginTop: 4,
          }}
        >
          <h4
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 12px",
            }}
          >
            Order Summary
          </h4>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "#777",
              }}
            >
              Subtotal
            </span>

            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              ₹{subtotal.toLocaleString()}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "#777",
              }}
            >
              Shipping
            </span>

            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color:
                  shipping === 0
                    ? "#4caf50"
                    : "#1a1a1a",
              }}
            >
              {shipping === 0
                ? "FREE"
                : `₹${shipping}`}
            </span>
          </div>

          {shipping > 0 && (
            <p
              style={{
                fontSize: 11,
                color: "#C9848A",
                margin: "0 0 12px",
              }}
            >
              Add ₹
              {(3000 - subtotal).toLocaleString()}{" "}
              more for free shipping
            </p>
          )}

          <div
            style={{
              borderTop: "1px solid #f0ece8",
              paddingTop: 12,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#1a1a1a",
              }}
            >
              Total
            </span>

            <span
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#1a1a1a",
              }}
            >
              ₹{total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Checkout Button */}
      <button
  onClick={handleCheckout}
  style={{
    width: "100%",
    marginTop: 14,
    background: "#1a1a1a",
    color: "white",
    border: "none",
    borderRadius: 50,
    padding: "16px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  }}
>
  Checkout → ₹{total.toLocaleString()}
</button>

{!isLoggedIn && (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    }}
  >
    <button
      onClick={() => navigate("/auth")}
      style={{
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: 500,
        background: "#000000",
        padding: "10px 16px",
        borderRadius: 12,
        border: "1px solid #ffd6d6",
        cursor: "pointer",
      }}
    >
      Login / Register
    </button>
  </div>
)}
      </div>
    </div>
  );
}