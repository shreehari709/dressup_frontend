import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/Product";
import { useCart } from "../context/CartContext";
import SizeChart from "../components/SizeChart";

const sizeGuide = [
  { size: "XS", chest: "32", waist: "26", hip: "35" },
  { size: "S",  chest: "34", waist: "28", hip: "37" },
  { size: "M",  chest: "36", waist: "30", hip: "39" },
  { size: "L",  chest: "38", waist: "32", hip: "41" },
  { size: "XL", chest: "40", waist: "34", hip: "43" },
];

const careInstructions = [
  { icon: "🫧", text: "Gentle hand wash in cold water" },
  { icon: "🚫", text: "Do not tumble dry" },
  { icon: "🌿", text: "Dry in shade, avoid direct sunlight" },
  { icon: "🧺", text: "Iron on low heat with cloth cover" },
  { icon: "🧴", text: "Use mild detergent only" },
];

const productDetails = {
  Kurtas:    "Crafted from premium Chanderi silk, this kurta features intricate hand-embroidery along the neckline and hemline. The breathable fabric ensures all-day comfort while the contemporary silhouette blends traditional art with modern styling.",
  Anarkalis: "A floor-length masterpiece in soft georgette, this anarkali is adorned with delicate thread work and mirror embellishments. The flared silhouette flatters every body type and is perfect for festive occasions.",
  "Co-ords": "A relaxed co-ord set made from handloom cotton, featuring subtle block-print motifs. Mix and match the pieces for versatile everyday styling or wear together for a polished, coordinated look.",
  Sarees:    "Woven on traditional handlooms, this saree showcases bold block-print motifs in earthy tones. Comes with an unstitched blouse piece in matching fabric.",
  Lehengas:  "A show-stopping silk lehenga crafted for bridal and festive occasions. Features a heavily embroidered blouse, flared skirt with intricate zari work, and a sheer dupatta with scalloped edges.",
  Kaftans:   "A free-spirited kaftan hand-printed by artisans using natural dyes on soft cotton. Effortlessly elegant, it transitions from a beach cover-up to a casual evening wear.",
};

export default function Product() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", padding: 40, textAlign: "center" }}>
        <p style={{ fontSize: 48, margin: "0 0 16px" }}>🔍</p>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 8px" }}>Product not found</h3>
        <button onClick={() => navigate("/shop")} style={{ background: "#1a1a1a", color: "white", border: "none", borderRadius: 50, padding: "12px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer", marginTop: 12 }}>
          Back to Shop
        </button>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const description = productDetails[product.category] || productDetails["Kurtas"];

const handleAddToBag = () => {
  if (!selectedSize) return;

  addToCart(product, selectedSize);

  setAdded(true);

  setTimeout(() => {
    setAdded(false);
  }, 2000);
};

  return (
    <div style={{ background: "#FAF9F6", minHeight: "100vh", paddingBottom: 120 }}>

      {/* Back Button */}
      <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 10 }}>
        <button
          onClick={() => navigate(-1)}
          style={{ background: "white", border: "none", borderRadius: 50, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", cursor: "pointer", fontSize: 16 }}
        >
          ‹
        </button>
        <span style={{ fontSize: 13, color: "#999", fontWeight: 500 }}>Back</span>
      </div>

      {/* Product Image */}
      <div style={{ margin: "16px 20px 0", borderRadius: 24, overflow: "hidden", position: "relative", height: 380, background: "#f5ede8" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        {product.tag && (
          <span style={{ position: "absolute", top: 14, left: 14, background: "#1a1a1a", color: "white", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, padding: "4px 10px", borderRadius: 20, textTransform: "uppercase" }}>
            {product.tag}
          </span>
        )}
        <div style={{ position: "absolute", top: 14, right: 14, background: "#C9848A", color: "white", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>
          -{discount}%
        </div>
      </div>

      {/* Product Info */}
      <div style={{ padding: "20px 20px 0" }}>
        <p style={{ fontSize: 11, color: "#C9848A", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, margin: "0 0 6px" }}>
          {product.category}
        </p>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a1a1a", margin: "0 0 8px", fontFamily: "Georgia, serif", lineHeight: 1.2 }}>
          {product.name}
        </h1>

        {/* Rating */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
          <div style={{ display: "flex", gap: 2 }}>
            {[1,2,3,4,5].map((s) => (
              <span key={s} style={{ fontSize: 13, color: s <= Math.round(product.rating) ? "#f5a623" : "#e0dbd5" }}>★</span>
            ))}
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a" }}>{product.rating}</span>
          <span style={{ fontSize: 12, color: "#aaa" }}>({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a" }}>₹{product.price.toLocaleString()}</span>
          <span style={{ fontSize: 15, color: "#bbb", textDecoration: "line-through" }}>₹{product.originalPrice.toLocaleString()}</span>
          <span style={{ fontSize: 12, color: "#4caf50", fontWeight: 700 }}>Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
        </div>

        {/* Size Selector */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>Select Size</span>
            <button
              onClick={() => setActiveTab("sizeGuide")}
              style={{ background: "none", border: "none", fontSize: 12, color: "#C9848A", fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}
            >
              Size Guide
            </button>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {sizeGuide.map(({ size }) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  width: 44, height: 44, borderRadius: 12,
                  border: selectedSize === size ? "2px solid #1a1a1a" : "1.5px solid #e0dbd5",
                  background: selectedSize === size ? "#1a1a1a" : "white",
                  color: selectedSize === size ? "white" : "#555",
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 0, borderBottom: "1.5px solid #f0ece8" }}>
            {[
              { key: "description", label: "Description" },
              { key: "sizeGuide", label: "Size Guide" },
              { key: "care", label: "Care" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  flex: 1, background: "none", border: "none",
                  borderBottom: activeTab === tab.key ? "2px solid #1a1a1a" : "2px solid transparent",
                  marginBottom: -1.5,
                  padding: "10px 4px",
                  fontSize: 12, fontWeight: activeTab === tab.key ? 700 : 500,
                  color: activeTab === tab.key ? "#1a1a1a" : "#aaa",
                  cursor: "pointer", transition: "all 0.15s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ paddingTop: 16 }}>
            {activeTab === "description" && (
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, margin: 0 }}>
                {description}
              </p>
            )}

            {activeTab === "sizeGuide" && (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                  <thead>
                    <tr style={{ background: "#f5ede8" }}>
                      {["Size", "Chest (in)", "Waist (in)", "Hip (in)"].map((h) => (
                        <th key={h} style={{ padding: "8px 10px", textAlign: "center", fontWeight: 700, color: "#1a1a1a", borderRadius: 0 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeGuide.map((row, i) => (
                      <tr key={row.size} style={{ background: i % 2 === 0 ? "white" : "#faf9f6" }}>
                        <td style={{ padding: "9px 10px", textAlign: "center", fontWeight: 700, color: "#C9848A" }}>{row.size}</td>
                        <td style={{ padding: "9px 10px", textAlign: "center", color: "#555" }}>{row.chest}</td>
                        <td style={{ padding: "9px 10px", textAlign: "center", color: "#555" }}>{row.waist}</td>
                        <td style={{ padding: "9px 10px", textAlign: "center", color: "#555" }}>{row.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: 11, color: "#aaa", marginTop: 10 }}>
                  * Measurements are in inches. If between sizes, size up for comfort.
                </p>
              </div>
            )}

            {activeTab === "care" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {careInstructions.map((care) => (
                  <div key={care.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20, width: 32, textAlign: "center" }}>{care.icon}</span>
                    <span style={{ fontSize: 13, color: "#555" }}>{care.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


  <div>
      {/* Product Details */}

      <SizeChart />
    </div>


      {/* Add to Bag CTA */}
   {/* Add to Bag CTA */}
<div
  style={{
    position: "fixed",
    bottom: 80,
    left: 0,
    right: 0,
    padding: "12px 20px",
    background: "linear-gradient(to top, #FAF9F6 80%, transparent)",
    zIndex: 50,
  }}
>
  <button
    onClick={handleAddToBag}
    disabled={!selectedSize}
    style={{
      width: "100%",
      background: added
        ? "#4caf50"
        : selectedSize
        ? "#1a1a1a"
        : "#999",
      color: "white",
      border: "none",
      borderRadius: 50,
      padding: "16px",
      fontSize: 14,
      fontWeight: 700,
      cursor: selectedSize ? "pointer" : "not-allowed",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      transition: "all 0.3s ease",
    }}
  >
    {added
      ? "✓ Added to Bag!"
      : selectedSize
      ? `Add to Bag — ₹${product.price.toLocaleString()}`
      : "Select a Size First"}
  </button>
</div>
    </div>
  );
}