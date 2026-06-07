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
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main
        style={{
          flex: 1,
          paddingTop: "80px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}