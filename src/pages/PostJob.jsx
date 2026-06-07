import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("IT");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "jobs"), {
        title,
        company,
        location,
        category,
        description,
        link,
        createdAt: new Date(),
      });

      alert("Job posted successfully ✅");

      // reset form
      setTitle("");
      setCompany("");
      setLocation("");
      setCategory("IT");
      setDescription("");
      setLink("");
    } catch (error) {
      console.error(error);
      alert("Error posting job ❌");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Post a Job</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>IT</option>
          <option>Finance</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Healthcare</option>
          <option>Education</option>
        </select>

        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Apply Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#0056b3",
            color: "white",
            padding: "10px",
            border: "none",
          }}
        >
          {loading ? "Posting..." : "Publish Job"}
        </button>
      </form>
    </div>
  );
}