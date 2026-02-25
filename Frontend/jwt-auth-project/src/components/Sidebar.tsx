import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Package2,
} from "lucide-react";

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const token = localStorage.getItem("token");

  const handleLogout = async() => {
    
    const response = await fetch("http://localhost:8080/api/auth/logout",{
        method: "POST",
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({token})
    });

    if(response.ok)
    {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("role");

      window.location.href = "/login";

    }
  } 




  return (
    <>
      <style>{`
        .sidebar {
           width: 260px;
            height: 100vh;
            background: #ffffff;
            border-right: 1px solid #e2e8f0;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 1000;
            display: flex;
            flex-direction: column;
        }

        .sidebar-header {
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid #e2e8f0;
        }

        .logo-text {
          font-size: 20px;
          font-weight: bold;
          color: #1e293b;
          margin-left: 8px;
        }

        .nav {
           flex: 1;
            padding: 16px 12px;
            overflow-y: auto;
            display: flex;          /* add this */
            flex-direction: column; /* IMPORTANT */
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 14px;
          color: #475569;
          transition: 0.2s ease;
          margin-bottom: 6px;
        }

        .nav-link:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .nav-link.active {
          background: #eef2ff;
          color: #4f46e5;
          font-weight: 600;
        }

        .nav-icon {
          margin-right: 12px;
          color: #94a3b8;
        }

        .nav-link.active .nav-icon {
          color: #4f46e5;
        }

        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }

        .logout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 10px 14px;
          border-radius: 8px;
          border: none;
          background: none;
          font-size: 14px;
          color: #475569;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .logout-btn:hover {
          background: #fef2f2;
          color: #dc2626;
        }

        .logout-btn:hover svg {
          color: #dc2626;
        }
      `}</style>

      <aside className="sidebar">
        <div className="sidebar-header">
          {/* <Package2 size={22} color="#4f46e5" /> */}
          <Link to="/">
            <div className="d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '10px' }}>
                <i className="bi bi-lightning-charge-fill text-white"></i>
            </div>
          </Link>
           
          <span className="logo-text">AdminPanel</span>
        </div>

        <div className="nav">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <item.icon size={18} className="nav-icon" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} style={{ marginRight: "12px" }} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}