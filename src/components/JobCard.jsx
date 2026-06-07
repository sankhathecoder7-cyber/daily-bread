import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #eee",
        borderRadius: "14px",
        padding: "20px",
        transition: "0.25s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* TITLE */}
      <h3 style={{ marginBottom: "6px", color: "#111" }}>
        {job.title}
      </h3>

      {/* COMPANY */}
      <p style={{ color: "#555", marginBottom: "12px", fontSize: "14px" }}>
        {job.company}
      </p>

      {/* TAGS ROW */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        {/* CATEGORY */}
        <span
          style={{
            background: "#e8f1ff",
            color: "#0d6efd",
            padding: "6px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          {job.category}
        </span>

        {/* LOCATION */}
        <span
          style={{
            background: "#f3f4f6",
            color: "#333",
            padding: "6px 10px",
            borderRadius: "20px",
            fontSize: "12px",
          }}
        >
           {job.location}
        </span>

        {/* OPTIONAL TYPE (future SaaS feature) */}
        {job.type && (
          <span
            style={{
              background: "#eaffea",
              color: "#1a7f37",
              padding: "6px 10px",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            {job.type}
          </span>
        )}
      </div>

      {/* ACTION ROW */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* future salary badge */}
        <span style={{ fontSize: "12px", color: "#888" }}>
          {job.salary ? `💰 ${job.salary}` : ""}
        </span>

        <Link
          to={`/job/${job.id}`}
          style={{
            display: "inline-block",
            color: "white",
            background: "#0d6efd",
            padding: "10px 14px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}