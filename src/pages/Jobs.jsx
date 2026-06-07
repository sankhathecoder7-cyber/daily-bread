import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const snap = await getDocs(collection(db, "jobs"));

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const locations = [
    "All",
    "Dar es Salaam",
    "Arusha",
    "Dodoma",
    "Kigoma",
    "Morogoro",
    "Mwanza",
    "Geita",
    "Zanzibar",
    "Pwani",
    "Mbeya",
    "Kahama",
    "Musoma",
    "Shinyanga",
    "Kilimanjaro",
    "Kasulu",
    "Iringa",
    "Tanga",
    "Mtwara",
    "Kagera",
    "Tabora",
  ];

  const categories = [
    "All",
    "IT Jobs",
    "Finance Jobs",
    "Engineering Jobs",
    "Marketing Jobs",
    "Healthcare Jobs",
    "Education Jobs",
    "Government Jobs",
    "NGO Jobs",
    "Sales Jobs",
    "Logistics Jobs",
  ];

  const jobTypes = [
    "All",
    "Flexible Jobs",
    "Freelance Jobs",
    "Remote Jobs",
    "Work From Home",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.company?.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "All" || job.location === location;

    const matchesCategory =
      category === "All" || job.category === category;

    const matchesType =
      type === "All" || job.type === type;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesType
    );
  });

  const chipStyle = (active, color) => ({
    padding: "10px 14px",
    borderRadius: "30px",
    border: "1px solid #ddd",
    cursor: "pointer",
    fontSize: "13px",
    background: active ? color : "white",
    color: active ? "white" : "#333",
    fontWeight: "500",
    transition: "0.2s",
  });

  const bigButtonStyle = (active) => ({
    padding: "12px 18px",
    borderRadius: "40px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    background: active ? "#111827" : "#e5e7eb",
    color: active ? "white" : "#111827",
  });

  return (
    <div
      style={{
        padding: "20px",
        background: "#f6f8fb",
        minHeight: "100vh",
      }}
    >
      {/* SEARCH */}
      <h3 style={{ marginBottom: "10px" }}>
        🔍 Search Jobs
      </h3>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* JOB TYPE BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {jobTypes.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            style={bigButtonStyle(type === t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* CATEGORY + LOCATION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {/* CATEGORY LEFT */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>
            📂 Category
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={chipStyle(
                  category === cat,
                  "#198754"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* LOCATION RIGHT */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            textAlign: "right",
          }}
        >
          <h3 style={{ marginBottom: "12px" }}>
            📍 Location
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "flex-end",
            }}
          >
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setLocation(loc)}
                style={chipStyle(
                  location === loc,
                  "#0d6efd"
                )}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <h2 style={{ marginBottom: "20px" }}>
        Available Jobs ({filteredJobs.length})
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              gridColumn: "1 / -1",
            }}
          >
            <h3>No jobs found</h3>
            <p>
              Try changing category, location,
              search term, or job type.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}