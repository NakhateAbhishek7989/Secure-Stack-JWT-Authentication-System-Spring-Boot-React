import { useNavigate } from "react-router-dom";

export function Unauthorized() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // redirect to home or dashboard
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "80px", marginBottom: "20px", color: "#dc3545" }}>
        403
      </h1>
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Unauthorized Access
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#495057" }}>
        Sorry, you do not have permission to view this page.
      </p>
      <button
        onClick={handleGoBack}
        style={{
          padding: "12px 30px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Go Back Home
      </button>
    </div>
  );
}