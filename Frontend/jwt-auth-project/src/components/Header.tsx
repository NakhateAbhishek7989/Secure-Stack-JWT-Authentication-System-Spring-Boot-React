import React from "react";
import { Bell, Search, Menu } from "lucide-react";

export function Header() {

const name = localStorage.getItem("name");
const role = localStorage.getItem("role");

  return (
    <>
      <style>{`
        .header {
          height: 64px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 10;
          font-family: Arial, sans-serif;
        }

        .header-left {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .menu-btn {
          background: none;
          border: none;
          margin-right: 16px;
          cursor: pointer;
          color: #64748b;
          display: none;
        }

        .menu-btn:hover {
          color: #334155;
        }

        .search-container {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .search-icon {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-input {
          width: 100%;
          padding: 8px 12px 8px 32px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: #f8fafc;
          font-size: 14px;
          transition: 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          background: white;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79,70,229,0.2);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .notification-btn {
          position: relative;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          border-radius: 50%;
          transition: 0.2s ease;
          color: #94a3b8;
        }

        .notification-btn:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .notification-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          height: 8px;
          width: 8px;
          background: #ef4444;
          border-radius: 50%;
          border: 2px solid white;
        }

        .user-section {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding-left: 16px;
          border-left: 1px solid #e2e8f0;
        }

        .avatar {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          margin: 0;
        }

        .user-role {
          font-size: 12px;
          color: #64748b;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }

          .search-container {
            display: none;
          }

          .user-info {
            display: none;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-left">
          <button className="menu-btn">
            <Menu size={24} />
          </button>

          <div className="search-container">
            <div className="search-icon">
              <Search size={16} />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="header-right">
          <button className="notification-btn">
            <span className="notification-dot"></span>
            <Bell size={20} />
          </button>

          <div className="user-section">
            <img
              className="avatar"
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
              alt="User avatar"
            />
            <div className="user-info">
              <p className="user-name">{name}</p>
              <p className="user-role">{role}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
