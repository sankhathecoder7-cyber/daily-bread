export default function Login() {
    return (
      <div style={{ paddingTop: "100px", padding: "30px" }}>
        <h1>Login</h1>
  
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "400px",
          }}
        >
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
  
          <button
            style={{
              background: "#0056b3",
              color: "white",
              padding: "10px",
              border: "none",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }