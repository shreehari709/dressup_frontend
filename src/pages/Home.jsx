import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../data/Product";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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
      }}
    >
      {/* Search Bar */}
      <div style={{ padding: "14px 20px 8px", marginTop: 70 }}>
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
            placeholder="Search kurtas, sarees, lehengas..."
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

      {/* Hero Banner */}
      <div style={{ padding: "12px 20px" }}>
        <div
          style={{
            background:
              "linear-gradient(135deg, #f9e8e8 0%, #f0d5d5 50%, #e8d0c4 100%)",
            borderRadius: 24,
            padding: "28px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -30,
              right: -30,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "rgba(201,132,138,0.12)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: 60,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(178,200,178,0.18)",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 3,
                color: "#C9848A",
                textTransform: "uppercase",
                background: "rgba(201,132,138,0.12)",
                padding: "4px 10px",
                borderRadius: 20,
              }}
            >
              New Collection
            </span>

            <h2
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "#1a1a1a",
                margin: "10px 0 6px",
                lineHeight: 1.2,
                fontFamily: "Georgia, serif",
              }}
            >
              Festive Elegance
              <br />
              Awaits You ✨
            </h2>

            <p
              style={{
                fontSize: 13,
                color: "#777",
                margin: "0 0 18px",
              }}
            >
              Handcrafted Indian fashion
            </p>

            <Link
              to="/shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#1a1a1a",
                color: "white",
                padding: "11px 22px",
                borderRadius: 50,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: "20px 20px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Categories
          </h3>

          <Link
            to="/shop"
            style={{
              fontSize: 12,
              color: "#C9848A",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            See all
          </Link>
        </div>

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
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Section */}
      <div style={{ padding: "22px 20px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Popular
          </h3>

          <Link
            to="/shop"
            style={{
              fontSize: 12,
              color: "#C9848A",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            See all
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
          }}
        >
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
  return (
    <div
      style={{
        background: "white",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        position: "relative",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: 180,
          background: "#f5ede8",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* Tag */}
        {product.tag && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "#1a1a1a",
              color: "white",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 1,
              padding: "3px 8px",
              borderRadius: 20,
              textTransform: "uppercase",
            }}
          >
            {product.tag}
          </span>
        )}
      </div>

      {/* Info */}
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

          <button
            style={{
              background: "#1a1a1a",
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "6px 12px",
              fontSize: 10,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: 0.5,
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}