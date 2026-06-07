import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (active) => ({
    textDecoration: "none",
    color: active ? "#fff" : "#333",
    background: active ? "#0056b3" : "transparent",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
    flexShrink: 0,
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        minHeight: "70px",
        height: "auto",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
        flexWrap: "wrap",
      }}
    >
      {/* LOGO */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#111",
          fontWeight: "bold",
          fontSize: "18px",
          whiteSpace: "nowrap",
        }}
      >
        🍞 DAILY BREAD
      </Link>

      {/* MENU (SCROLLABLE ON MOBILE) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          flex: 1,
          marginLeft: "10px",
          marginRight: "10px",
          overflowX: "auto",
          whiteSpace: "nowrap",
          paddingBottom: "4px",
        }}
      >
        <Link style={linkStyle(isActive("/"))} to="/">Home</Link>
        <Link style={linkStyle(isActive("/jobs"))} to="/jobs">All Jobs</Link>
        <Link style={linkStyle(isActive("/tenders"))} to="/tenders">Tenders</Link>
        <Link style={linkStyle(isActive("/post-job"))} to="/post-job">Post Job</Link>
        <Link style={linkStyle(isActive("/post-tender"))} to="/post-tender">Post Tender</Link>
        <Link style={linkStyle(isActive("/blog"))} to="/blog">Blog</Link>
        <Link style={linkStyle(isActive("/contact"))} to="/contact">Contact</Link>
      </div>

      {/* LOGIN */}
      <Link
        to="/login"
        style={{
          background: "#0056b3",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Login
      </Link>
    </nav>
  );
}