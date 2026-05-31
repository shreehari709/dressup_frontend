import { products } from "../data/Product";
//import EditProfile from "./EditProfile";
//import UpdateProfile from "./EditProfile";
//import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useNavigate } from "react-router-dom";
import WhatsAppButton from "../components/WhatsappButton";
import { div } from "framer-motion/client";
import { useState, useEffect } from "react";
const menuItems = [
  { icon: "📦", label: "My Orders", sub: "" },

];


// const UserProfile = {
//   name: UpdateProfile.username,
//   email: UpdateProfile.email,
//   phone: UpdateProfile.phoneNumber,
// }

//const recentOrders = [products[0], products[1], products[2]];




export default function Profile() {
// console.log("Profile Rendered");
//   const users = JSON.parse(localStorage.getItem("user"));

//   console.log(users);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

 useEffect(() => {
  try {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  } catch (err) {
    console.error(err);
  }
}, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/auth");
  };

  return (

    <div style={{ background: "#FAF9F6", minHeight: "120vh", paddingBottom: 140, marginTop: 60}}>

      {/* Profile Header */}
      <div style={{
        background: "white",
        padding: "24px 20px 20px",
        display: "flex", alignItems: "center", gap: 16,
        borderBottom: "1px solid #f5ede8",position: "relative",
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: "linear-gradient(135deg, #f9e8e8, #f0d5d5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26,
          border: "3px solid #f0ece8",
        }}>
          {user?.name?.charAt(0)?.toUpperCase() || "👩"}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", margin: "0 0 3px", fontFamily: "Georgia, serif" }}>
           {user?.name || "Guest User"}
          </h3>
          <p style={{ fontSize: 13, color: "#999", margin: 0 }}>{user?.email || "Not Available"}</p>
          <p style={{ fontSize: 13, color: "#999", margin: 0 }}>{user?.contactNumber || "Not Available"}</p>
        </div>
        <div >
          <WhatsAppButton/>
        </div>

      </div>

      {/* Stats */}
      {/* <div style={{
        display: "flex", background: "white",
        borderBottom: "1px solid #f5ede8",
      }}>
        {[
          { label: "Orders", value: "12" },
          { label: "Charts", value: "8" },
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
      </div> */}

      {/* Orders */}
      {/* <div style={{ padding: "20px 20px 0" }}>
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
      </div> */}

      {/* Menu Items */}
      {/* <div style={{ padding: "20px 20px 0" }}>
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
      </div> */}


   {/* About Us */}

<div
  style={{
    marginTop: 50,
    background: "linear-gradient(135deg, #fff7f7 0%, #fdf1f1 100%)",
    borderRadius: 28,
    padding: "32px 24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
    border: "1px solid #f3dede",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      marginBottom: 18,
    }}
  >
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "#f9d9dd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
      }}
    >
      🌸
    </div>

    <h1
      style={{
        margin: 0,
        fontSize: 28,
        fontWeight: 700,
        color: "#1a1a1a",
        fontFamily: "Georgia, serif",
      }}
    >
      About Us
    </h1>
  </div>

  <p
    style={{
      fontSize: 15,
      lineHeight: 1.9,
      color: "#555",
      textAlign: "center",
      maxWidth: 700,
      margin: "0 auto",
    }}
  >
    At <strong style={{ color: "#C9848A" }}>Phool Si Pyari</strong>,
    fashion is more than clothing — it’s confidence, elegance, and
    self-expression. We create thoughtfully curated collections inspired
    by timeless beauty and modern femininity. From everyday comfort to
    statement festive wear, every piece is designed to make you feel as
    beautiful as a blooming flower ✨
  </p>
</div>

{/* Instagram Section */}

<div
  style={{
    marginTop: 28,
    marginBottom: 40,
    background: "white",
    borderRadius: 24,
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
    border: "1px solid #f3ece8",
  }}
>
  <div
    style={{
      width: 58,
      height: 58,
      borderRadius: "50%",
      background:
        "linear-gradient(135deg, #feda75, #fa7e1e, #d62976, #962fbf)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      color: "white",
      marginBottom: 14,
      boxShadow: "0 6px 16px rgba(214,41,118,0.25)",
    }}
  >
    📸
  </div>

  <h3
    style={{
      margin: "0 0 8px",
      fontSize: 18,
      color: "#1a1a1a",
      fontWeight: 700,
    }}
  >
    Follow Our Journey
  </h3>

  <p
    style={{
      margin: "0 0 16px",
      fontSize: 14,
      color: "#777",
      lineHeight: 1.6,
      maxWidth: 320,
    }}
  >
    Daily outfit inspiration, new arrivals, behind-the-scenes &
    everything beautiful ✨
  </p>

  <a
    href="https://instagram.com/phoolsipyarii"
    target="_blank"
    rel="noreferrer"
    style={{
      textDecoration: "none",
      background: "linear-gradient(135deg, #d62976, #fa7e1e)",
      color: "white",
      padding: "12px 24px",
      borderRadius: 50,
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 1,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 6px 16px rgba(214,41,118,0.2)",
    }}
  >
    <span>Instagram</span>
    <span>@phoolsipyarii</span>
  </a>
</div>

      {/* Logout */}
     <div style={{ padding: "16px 20px" }}>
  <button
    onClick={handleLogout}
    style={{
      width: "100%",
      background: "#fff0f0",
      color: "#e05555",
      border: "1.5px solid #fdd",
      borderRadius: 50,
      padding: "14px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
    }}
  >
    Log Out
  </button>
</div>
    </div>

  // <div>
  //   <h1 style={{marginTop:"300px"}}>Profile Page Working</h1>;
  // </div>

  );
}


