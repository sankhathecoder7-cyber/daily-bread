import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111827",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>
        🍞 DAILY BREAD
      </h2>

      <p
        style={{
          color: "#d1d5db",
          marginBottom: "20px",
        }}
      >
        Find jobs, tenders and opportunities across Tanzania.
      </p>

      {/* FOOTER LINKS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/about"
          style={{ color: "white", textDecoration: "none" }}
        >
          About Us
        </Link>

        <Link
          to="/other"
          style={{ color: "white", textDecoration: "none" }}
        >
          Other
        </Link>
      </div>

      {/* SOCIALS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          📘
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          📸
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          ✖️
        </a>
      </div>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        © 2026 DAILY BREAD. All Rights Reserved.
      </p>
    </footer>
  );
}