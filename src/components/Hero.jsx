import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "#f5f7fa",
      }}
    >
      <h1>Find Daily Job Opportunities</h1>

      <p
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          color: "#555",
        }}
      >
        Browse jobs from different sources in one place.
      </p>

      <Link to="/jobs">
        <button
          style={{
            background: "#0056b3",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Jobs
        </button>
      </Link>
    </div>
  );
}