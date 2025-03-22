import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {   //Functional Component , using usestate we manage 3 states
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #74ebd5, #acb6e5)",
    },
    card: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "350px",
      textAlign: "center",
    },
    heading: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    inputGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#555",
      display: "block",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
      outline: "none",
    },
    passwordContainer: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    showButton: {
      position: "absolute",
      right: "10px",
      background: "none",
      border: "none",
      color: "#007BFF",
      cursor: "pointer",
      fontSize: "12px",
    },
    button: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      background: "#007BFF",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      background: "#0056b3",
    },
    linkText: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#555",
    },
    link: {
      color: "#007BFF",
      fontWeight: "bold",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>
          Login to <span style={{ color: "#007BFF" }}>Tatkal Connect</span>
        </h2>

        <form>
         
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                style={styles.showButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

         
          <button
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.background = styles.buttonHover.background)
            }
            onMouseLeave={(e) =>
              (e.target.style.background = styles.button.background)
            }
          >
            Login
          </button>
        </form>

       
        <p style={styles.linkText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
