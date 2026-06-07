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
        justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#111",
          fontWeight: "bold",
          fontSize: "20px",
          whiteSpace: "nowrap",
        }}
      >
        🍞 DAILY BREAD
      </Link>

      {/* MENU */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flex: 1,
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Link style={linkStyle(isActive("/"))} to="/">
          Home
        </Link>

        <Link style={linkStyle(isActive("/jobs"))} to="/jobs">
          All Jobs
        </Link>

        <Link style={linkStyle(isActive("/tenders"))} to="/tenders">
          Tenders
        </Link>

        <Link style={linkStyle(isActive("/post-job"))} to="/post-job">
          Post a Job
        </Link>

        <Link style={linkStyle(isActive("/post-tender"))} to="/post-tender">
          Post Tender
        </Link>

        <Link style={linkStyle(isActive("/blog"))} to="/blog">
          Blog
        </Link>

        <Link style={linkStyle(isActive("/contact"))} to="/contact">
          Contact Us
        </Link>
      </div>

      {/* LOGIN */}
      <Link
        to="/login"
        style={{
          background: "#0056b3",
          color: "#fff",
          padding: "8px 14px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        Login
      </Link>
    </nav>
  );
}