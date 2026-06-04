import { useState } from "react";
import { products, categories } from "../data/Product";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AddToCartButton from "../components/AddToCartButton";
import ProductDetail from "./ProductDetail";
export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#FAF9F6",
        minHeight: "100vh",
        paddingBottom: 120,
        marginTop: 80,
      }}
    >
      {/* Search */}
      {/* <div style={{ padding: "14px 20px 8px" }}>
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
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
      </div> */}

      {/* Category Filters */}
      {/* <div style={{ padding: "12px 20px 0" }}>
        <div
          style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}
        >
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                flexShrink: 0,
                padding: "8px 16px",
                borderRadius: 50,
                border:
                  activeCategory === cat
                    ? "none"
                    : "1.5px solid #e8e0d8",
                background:
                  activeCategory === cat ? "#1a1a1a" : "white",
                color: activeCategory === cat ? "white" : "#555",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div> */}

      {/* Results */}
      {/* <div style={{ padding: "14px 20px 4px" }}>
        <p style={{ fontSize: 12, color: "#999", margin: 0 }}>
          {filtered.length} results{" "}
          {activeCategory !== "All"
            ? `for "${activeCategory}"`
            : ""}
        </p>
      </div> */}

      {/* Product Grid */}
      <div style={{ padding: "4px 20px 0" }}>
       <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(150px, 1fr))",
    gap: 20,
    alignItems: "start",
  }}
>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, "M");

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <div
  style={{
    background: "white",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
    width: "100%",
    maxWidth: 320,
    margin: "0 auto",
    transition: "transform 0.2s ease",
  }}
>
        {/* Image */}
     <div
  style={{
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 5",
    background: "#f5ede8",
    overflow: "hidden",
  }}
>
      <img
  src={product.images?.[0] || product.image}
  alt={product.name}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }}
  onError={(e) => {
    e.target.style.display = "none";
  }}
/>

          {product.tag && (
      <span
  style={{
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 2,

    background: "#111",
    color: "#fff",

    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.5px",

    padding: "5px 10px",
    borderRadius: 999,

    textTransform: "uppercase",
    lineHeight: 1,
  }}
>
  {product.tag}
</span>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "10px 12px 12px" }}>
          <p
            style={{
              fontSize: 12,
              color: "#999",
              margin: "0 0 3px",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {product.category}
          </p>

          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 6px",
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#1a1a1a",
                }}
              >
                ₹{product.price.toLocaleString()}
              </span>

              <span
                style={{
                  fontSize: 11,
                  color: "#bbb",
                  textDecoration: "line-through",
                  marginLeft: 5,
                }}
              >
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>

            {/* Add Button */}
            {/* <button
              onClick={handleAdd}
              style={{
                background: added ? "#4caf50" : "#1a1a1a",
                color: "white",
                border: "none",
                borderRadius: 50,
                padding: "6px 12px",
                fontSize: 10,
                fontWeight: 700,
                cursor: "pointer",
                minWidth: 60,
                transition: "0.3s",
              }}
            >
              {added ? "✓ Added" : "Add"}
            </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}