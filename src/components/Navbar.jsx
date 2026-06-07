import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (active) => ({
    textDecoration: "none",
    color: active ? "#fff" : "#333",
    background: active ? "#0056b3" : "transparent",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "500",
    whiteSpace: "nowrap",
  });

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        🍞 DAILY BREAD
      </Link>

      {/* NAV LINKS (NO HAMBURGER, RESPONSIVE WRAP) */}
      <div className="nav-links">
        <Link style={linkStyle(isActive("/"))} to="/">Home</Link>
        <Link style={linkStyle(isActive("/jobs"))} to="/jobs">Jobs</Link>
        <Link style={linkStyle(isActive("/tenders"))} to="/tenders">Tenders</Link>
        <Link style={linkStyle(isActive("/post-job"))} to="/post-job">Post</Link>
        <Link style={linkStyle(isActive("/blog"))} to="/blog">Blog</Link>
        <Link style={linkStyle(isActive("/contact"))} to="/contact">Contact</Link>
      </div>

      {/* LOGIN */}
      <Link className="login-btn" to="/login">
        Login
      </Link>
    </nav>
  );
}