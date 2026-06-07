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
    fontSize: "13px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    flexShrink: 0,
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      {/* LOGO */}
      <Link
        to="/"
        style={{
          fontWeight: "bold",
          fontSize: "15px",
          textDecoration: "none",
          color: "#111",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        🍞 DAILY BREAD
      </Link>

      {/* MENU (FIXED MOBILE SCROLL) */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          flex: 1,
          margin: "0 10px",
          overflowX: "auto",
          whiteSpace: "nowrap",
          alignItems: "center",
        }}
      >
        <Link style={linkStyle(isActive("/"))} to="/">Home</Link>
        <Link style={linkStyle(isActive("/jobs"))} to="/jobs">Jobs</Link>
        <Link style={linkStyle(isActive("/tenders"))} to="/tenders">Tenders</Link>
        <Link style={linkStyle(isActive("/post-job"))} to="/post-job">Post</Link>
        <Link style={linkStyle(isActive("/blog"))} to="/blog">Blog</Link>
        <Link style={linkStyle(isActive("/contact"))} to="/contact">Contact</Link>
      </div>

      {/* LOGIN */}
      <Link
        to="/login"
        style={{
          background: "#0056b3",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: "6px",
          fontSize: "13px",
          fontWeight: "bold",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        Login
      </Link>
    </nav>
  );
}