import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const ref = doc(db, "jobs", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setJob({ id: snap.id, ...snap.data() });
      } else {
        setJob(null);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return (
      <div style={{ paddingTop: "120px", textAlign: "center" }}>
        Loading job or job not found...
      </div>
    );
  }

  // SAFE VALUES
  const shareUrl = window.location.href;

  const whatsappText = `🔥 Job Opportunity: ${job.title || "Job"} at ${
    job.company || "Company"
  }
📍 Location: ${job.location || "N/A"}
📂 Category: ${job.category || "N/A"}
👉 Apply here: ${shareUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
  };

  return (
    <div
      style={{
        paddingTop: "100px",
        minHeight: "100vh",
        background: "#f5f7fa",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* BACK */}
        <Link
          to="/jobs"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            color: "#0056b3",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          ← Back to Jobs
        </Link>

        {/* MAIN CARD */}
        <div
          style={{
            background: "white",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* TITLE */}
          <h1 style={{ marginBottom: "5px" }}>
            {job.title || "No Title"}
          </h1>

          <p style={{ color: "#666", marginBottom: "15px" }}>
            {job.company || "No Company"}
          </p>

          {/* TAGS */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                background: "#e6f0ff",
                color: "#0056b3",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                marginRight: "10px",
              }}
            >
              {job.category || "N/A"}
            </span>

            <span
              style={{
                background: "#f1f1f1",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
              }}
            >
              📍 {job.location || "N/A"}
            </span>
          </div>

          {/* DESCRIPTION */}
          <div style={{ marginBottom: "25px" }}>
            <h3>Job Description</h3>
            <p style={{ lineHeight: "1.7", color: "#444" }}>
              {job.description || "No description provided."}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            {/* APPLY */}
            <a
              href={job.link || "#"}
              target="_blank"
              rel="noreferrer"
              style={{
                background: job.link ? "#0056b3" : "gray",
                color: "white",
                padding: "12px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                pointerEvents: job.link ? "auto" : "none",
              }}
            >
              🚀 Apply Now
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25D366",
                color: "white",
                padding: "12px 18px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              📲 WhatsApp Share
            </a>

            {/* COPY LINK */}
            <button
              onClick={handleCopy}
              style={{
                background: "#333",
                color: "white",
                padding: "12px 18px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🔗 Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}