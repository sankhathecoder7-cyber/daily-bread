import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f5f7fa",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main
        style={{
          flex: 1,
          paddingTop: "90px", // FIX: prevents navbar overlap
          paddingLeft: "12px",
          paddingRight: "12px",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}