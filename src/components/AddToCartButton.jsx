import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({
  product,
  selectedSize,
}) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) return;

    addToCart(product, selectedSize);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={!selectedSize}
      style={{
        width: "90%",
        display: "block",
        margin: "0 auto",
        background: added
          ? "#4caf50"
          : selectedSize
          ? "#1a1a1a"
          : "#bdbdbd",
        color: "white",
        border: "none",
        borderRadius: 50,
        padding: "16px",
        fontSize: 14,
        fontWeight: 700,
        cursor: selectedSize ? "pointer" : "not-allowed",
        letterSpacing: 1.5,
        textTransform: "uppercase",
        transition: "all 0.3s",
      }}
    >
      {added
        ? "✓ Added to Bag!"
        : selectedSize
        ? `Add to Bag — ₹${product.price.toLocaleString()}`
        : "Select a Size First"}
    </button>
  );
}