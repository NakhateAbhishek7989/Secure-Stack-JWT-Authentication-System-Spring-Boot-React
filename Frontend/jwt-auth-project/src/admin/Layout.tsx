import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { Unauthorized } from "./Unauthorized";

export function Layout() {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [authorized, setAuthorized] = useState(true);
  
  useEffect(() => {

    if(role !== "ADMIN" || role == null)
    {
      setAuthorized(false); 
    }

    const getadminapproval = async () => {

      try {

        const response = await fetch("http://localhost:8080/api/admin/getAdmin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });


        if (!response.ok) {
          throw new Error("Server error");
        }

      }
      catch (error) {
        console.log(error);

      }
      
    }

    getadminapproval();

  }, []);


  if (!authorized) {
    return <Unauthorized />;
  }


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          background: "#f8fafc",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Header />

        <div style={{ padding: "24px", flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}