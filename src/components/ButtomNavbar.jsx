import { Link, useLocation } from "react-router-dom";
import logo from '../assets/favicon.svg';
const HomeIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#999"}
    strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const GridIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#999"}
    strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const HeartIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#999"}
    strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const BagIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#999"}
    strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const UserIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "white" : "none"} stroke={active ? "white" : "#999"}
    strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const OrderIcon = ({ active }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={active ? "white" : "none"}
    stroke={active ? "white" : "#999"}
    strokeWidth={active ? 2.5 : 1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const navItems = [
  { path: "/", icon: HomeIcon },
  { path: "/collections", icon: GridIcon },
  { path: "/cart", icon: BagIcon },
  { path: "/orders", icon: OrderIcon },
  { path: "/profile", icon: UserIcon },
];

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <>
      {/* Mobile Header */}
      <div className=" md:hidden
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-gradient-to-r
    from-pink-100
    via-rose-100
    to-pink-200
    backdrop-blur-lg
    border-b
    border-pink-200/50
    shadow-sm">
        <div className="flex items-center gap-3 px-4 py-3 ">
          
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />

          {/* Website Title */}
          <h1 className="text-xl font-bold tracking-wide">
            Phoolsipyari
          </h1>
        </div>
      </div>

      <div
    className="md:hidden"
    style={{
      position: "fixed",
      bottom: 16,
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 40px)",
      maxWidth: 420,
      zIndex: 9999,
    }}
  >
      <div style={{
        height: 64,
        background: "white",
        borderRadius: 9999,
        border: "0.5px solid rgba(0,0,0,0.07)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 8px",
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: isActive ? "#FF00007C" : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: isActive ? "scale(1.1)" : "scale(1)",
                textDecoration: "none",
              }}
            >
              <Icon active={isActive} />
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
}
