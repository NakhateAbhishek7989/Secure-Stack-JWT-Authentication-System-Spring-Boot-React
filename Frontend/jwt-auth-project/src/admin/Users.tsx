

import React from "react";
import { MoreHorizontal, Filter, Plus } from "lucide-react";

const users = [
  { id: 1, name: "Lindsay Walton", title: "Front-end Developer", email: "lindsay.walton@example.com", role: "Member", status: "Active" },
  { id: 2, name: "Courtney Henry", title: "Designer", email: "courtney.henry@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Tom Cook", title: "Director of Product", email: "tom.cook@example.com", role: "Member", status: "Offline" },
  { id: 4, name: "Whitney Francis", title: "Copywriter", email: "whitney.francis@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Leonard Krasner", title: "Senior Designer", email: "leonard.krasner@example.com", role: "Owner", status: "Active" },
  { id: 6, name: "Floyd Miles", title: "Principal Designer", email: "floyd.miles@example.com", role: "Member", status: "Offline" },
];

export function Users() {
  return (
    <>
      <style>{`
        .users-container {
          padding: 24px;
          font-family: Arial, sans-serif;
          background-color: #f8fafc;
        }

        .users-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .users-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
          color: #1e293b;
        }

        .users-header p {
          margin-top: 6px;
          font-size: 14px;
          color: #64748b;
        }

        .btn-group {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid #cbd5e1;
          background: white;
          transition: 0.2s ease;
        }

        .btn:hover {
          background: #f1f5f9;
        }

        .btn-primary {
          background: #4f46e5;
          color: white;
          border: none;
        }

        .btn-primary:hover {
          background: #4338ca;
        }

        .card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: #f1f5f9;
        }

        th {
          text-align: left;
          padding: 14px 20px;
          font-size: 12px;
          text-transform: uppercase;
          color: #64748b;
        }

        td {
          padding: 16px 20px;
          font-size: 14px;
          border-top: 1px solid #e2e8f0;
        }

        tbody tr:hover {
          background: #f8fafc;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-direction: row;
        }

        .avatar {
          height: 40px;
          width: 40px;
          border-radius: 50%;
        }

        .user-name {
          font-weight: 600;
          color: #0f172a;
        }

        .user-email {
          font-size: 13px;
          color: #64748b;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-active {
          background: #dcfce7;
          color: #166534;
        }

        .status-offline {
          background: #e2e8f0;
          color: #334155;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 6px;
        }

        .dot-active {
          background: #22c55e;
        }

        .dot-offline {
          background: #64748b;
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: 0.2s;
        }

        .action-btn:hover {
          background: #f1f5f9;
        }

        .table-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          font-size: 14px;
          color: #64748b;
        }

        .pagination button {
          padding: 6px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          background: white;
          cursor: pointer;
        }

        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .users-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-group {
            margin-top: 15px;
          }

          table {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="users-container">
        <div className="users-header">
          <div>
            <h2>Users</h2>
            <p>A list of all the users in your account including their name, title, email and role.</p>
          </div>
          <div className="btn-group">
            <button className="btn">
              <Filter size={16} />
              Filter
            </button>
            <button className="btn btn-primary">
              <Plus size={16} />
              Add User
            </button>
          </div>
        </div>

        <div className="card">
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((person) => (
                  <tr key={person.id}>
                    <td>
                      <div className="user-info">
                        <img
                          className="avatar"
                          src={`https://api.dicebear.com/7.x/notionists/svg?seed=${person.name}`}
                          alt=""
                        />
                        <div>
                          <div className="user-name">{person.name}</div>
                          <div className="user-email">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{person.title}</td>
                    <td>
                      <span
                        className={`status-badge ${
                          person.status === "Active"
                            ? "status-active"
                            : "status-offline"
                        }`}
                      >
                        <span
                          className={`status-dot ${
                            person.status === "Active"
                              ? "dot-active"
                              : "dot-offline"
                          }`}
                        ></span>
                        {person.status}
                      </span>
                    </td>
                    <td>{person.role}</td>
                    <td style={{ textAlign: "right" }}>
                      <button className="action-btn">
                        <MoreHorizontal size={18} color="#64748b" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <div>
              Showing <strong>1</strong> to <strong>6</strong> of{" "}
              <strong>6</strong> results
            </div>
            <div className="pagination">
              <button disabled>Previous</button>
              <button disabled>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
