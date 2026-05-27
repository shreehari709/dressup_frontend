import { products } from "../data/Product";

const menuItems = [
  { icon: "📦", label: "My Orders", sub: "3 active orders" },
  { icon: "💳", label: "Payment Settings", sub: "Cards & UPI" },
  { icon: "📍", label: "Saved Addresses", sub: "2 addresses" },
  { icon: "🔔", label: "Notifications", sub: "Manage alerts" },
  { icon: "🛡️", label: "Privacy & Policy", sub: "" },
  { icon: "❓", label: "Help Center", sub: "" },
];

const recentOrders = [products[0], products[1], products[2]];

export default function Profile() {
  return (
    <div style={{ background: "#FAF9F6", minHeight: "120vh", paddingBottom: 140, marginTop: 60}}>

      {/* Profile Header */}
      <div style={{
        background: "white",
        padding: "24px 20px 20px",
        display: "flex", alignItems: "center", gap: 16,
        borderBottom: "1px solid #f5ede8",
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: "linear-gradient(135deg, #f9e8e8, #f0d5d5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26,
          border: "3px solid #f0ece8",
        }}>
          👩
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", margin: "0 0 3px", fontFamily: "Georgia, serif" }}>
            Priya Sharma
          </h3>
          <p style={{ fontSize: 13, color: "#999", margin: 0 }}>+91 98765 43210</p>
        </div>
        <button style={{
          background: "#f5ede8", border: "none", borderRadius: 50,
          padding: "8px 14px", fontSize: 12, fontWeight: 600,
          color: "#C9848A", cursor: "pointer",
        }}>
          Edit
        </button>
      </div>

      {/* Stats */}
      <div style={{
        display: "flex", background: "white",
        borderBottom: "1px solid #f5ede8",
      }}>
        {[
          { label: "Orders", value: "12" },
          { label: "Wishlist", value: "8" },
          { label: "Reviews", value: "5" },
        ].map((stat) => (
          <div key={stat.label} style={{
            flex: 1, padding: "16px 8px", textAlign: "center",
            borderRight: "1px solid #f5ede8",
          }}>
            <p style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", margin: "0 0 2px" }}>{stat.value}</p>
            <p style={{ fontSize: 12, color: "#999", margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Orders */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Recent Orders</h4>
          <button style={{ background: "none", border: "none", fontSize: 12, color: "#C9848A", fontWeight: 600, cursor: "pointer" }}>
            View all
          </button>
        </div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
          {recentOrders.map((item) => (
            <div key={item.id} style={{
              flexShrink: 0, width: 110,
              background: "white", borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}>
              <div style={{ height: 100, background: "#f5ede8" }}>
                <img src={item.image} alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
              <div style={{ padding: "8px 8px 10px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a", margin: "0 0 3px", lineHeight: 1.3 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: 11, color: "#C9848A", margin: 0, fontWeight: 700 }}>
                  ₹{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{
          background: "white", borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}>
          {menuItems.map((item, i) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 18px",
              borderBottom: i < menuItems.length - 1 ? "1px solid #f5ede8" : "none",
              cursor: "pointer",
            }}>
              <span style={{ fontSize: 20, width: 32, textAlign: "center" }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", margin: 0 }}>{item.label}</p>
                {item.sub && <p style={{ fontSize: 11, color: "#bbb", margin: 0 }}>{item.sub}</p>}
              </div>
              <span style={{ color: "#ccc", fontSize: 16 }}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div style={{ padding: "16px 20px" }}>
        <button style={{
          width: "100%", background: "#fff0f0",
          color: "#e05555", border: "1.5px solid #fdd",
          borderRadius: 50, padding: "14px",
          fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>
          Log Out
        </button>
      </div>
    </div>
  );
}