import { useState } from "react";
import { products, categories } from "../data/Product";
import { Link } from "react-router-dom";
export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      (activeCategory === "All" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#FAF9F6", minHeight: "100vh", paddingBottom: 120 }}>
      {/* Search */}
      <div style={{ padding: "14px 20px 8px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "white", borderRadius: 50,
          padding: "10px 16px",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          border: "1px solid #f0ece8",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            style={{ border: "none", outline: "none", flex: 1, fontSize: 13, color: "#333", background: "transparent" }}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div style={{ padding: "12px 20px 0" }}>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              flexShrink: 0, padding: "8px 16px", borderRadius: 50,
              border: activeCategory === cat ? "none" : "1.5px solid #e8e0d8",
              background: activeCategory === cat ? "#1a1a1a" : "white",
              color: activeCategory === cat ? "white" : "#555",
              fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div style={{ padding: "14px 20px 4px" }}>
        <p style={{ fontSize: 12, color: "#999", margin: 0 }}>
          {filtered.length} results {activeCategory !== "All" ? `for "${activeCategory}"` : ""}
        </p>
      </div>

      {/* Product Grid */}
      <div style={{ padding: "4px 20px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {filtered.map((product) => (
            <Link
  key={product.id}
  to={`/product/${product.id}`}
  style={{ textDecoration: "none" }}
>
  <ProductCard product={product} />
</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  return (
    <div style={{
      background: "white", borderRadius: 20, overflow: "hidden",
      boxShadow: "0 2px 16px rgba(0,0,0,0.06)", position: "relative",
    }}>
      <div style={{ position: "relative", height: 180, background: "#f5ede8" }}>
        <img src={product.image} alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        {product.tag && (
          <span style={{
            position: "absolute", top: 10, left: 10,
            background: "#1a1a1a", color: "white",
            fontSize: 9, fontWeight: 700, letterSpacing: 1,
            padding: "3px 8px", borderRadius: 20, textTransform: "uppercase",
          }}>{product.tag}</span>
        )}
        {/* <button onClick={() => setWished(!wished)} style={{
          position: "absolute", top: 8, right: 8,
          width: 30, height: 30, borderRadius: "50%",
          background: "white", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)", fontSize: 14,
        }}>
          {wished ? "❤️" : "🤍"}
        </button> */}
      </div>
      <div style={{ padding: "10px 12px 12px" }}>
        <p style={{ fontSize: 12, color: "#999", margin: "0 0 3px", textTransform: "uppercase", letterSpacing: 0.5 }}>
          {product.category}
        </p>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", margin: "0 0 6px", lineHeight: 1.3 }}>
          {product.name}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: 14, fontWeight: 800, color: "#1a1a1a" }}>₹{product.price.toLocaleString()}</span>
            <span style={{ fontSize: 11, color: "#bbb", textDecoration: "line-through", marginLeft: 5 }}>
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <button style={{
            background: "#1a1a1a", color: "white", border: "none", borderRadius: 50,
            padding: "6px 12px", fontSize: 10, fontWeight: 700, cursor: "pointer",
          }}>Add</button>
        </div>
      </div>
    </div>
  );
}