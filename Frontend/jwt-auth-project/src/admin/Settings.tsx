import React from "react";
export function Settings() {
  return (
    <>
      <style>{`
        .settings-container {
          max-width: 900px;
          margin: 30px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          background-color: #f8fafc;
        }

        .settings-header h2 {
          font-size: 24px;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 5px;
        }

        .settings-header p {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 25px;
        }

        .card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          margin-bottom: 25px;
          overflow: hidden;
        }

        .card-header {
          padding: 20px;
          border-bottom: 1px solid #e2e8f0;
        }

        .card-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #0f172a;
        }

        .card-header p {
          margin-top: 5px;
          font-size: 14px;
          color: #64748b;
        }

        .card-body {
          padding: 20px;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .profile-img {
          height: 80px;
          width: 80px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          object-fit: cover;
        }

        .file-input {
          font-size: 14px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 6px;
          color: #334155;
        }

        .form-group input {
          padding: 8px 10px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 14px;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79,70,229,0.2);
        }

        .card-footer {
          background: #f1f5f9;
          padding: 15px 20px;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid #e2e8f0;
        }

        .btn-primary {
          background: #4f46e5;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .btn-primary:hover {
          background: #4338ca;
        }

        .checkbox-group {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .checkbox-group input {
          margin-right: 10px;
          margin-top: 3px;
        }

        .checkbox-group label {
          font-weight: 500;
          color: #334155;
        }

        .checkbox-group p {
          margin: 2px 0 0 0;
          font-size: 13px;
          color: #64748b;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="settings-container">
        <div className="settings-header">
          <h2>Settings</h2>
          <p>Manage your account settings and preferences.</p>
        </div>

        {/* Profile Card */}
        <div className="card">
          <div className="card-header">
            <h3>Profile Information</h3>
            <p>Update your account's profile information and email address.</p>
          </div>

          <div className="card-body">
            <div className="profile-section">
              <img
                className="profile-img"
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"
                alt="Profile"
              />
              <input type="file" className="file-input" />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>First name</label>
                <input type="text" defaultValue="Jane" />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input type="text" defaultValue="Doe" />
              </div>

              <div className="form-group full">
                <label>Email address</label>
                <input type="email" defaultValue="jane.doe@example.com" />
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="btn-primary">Save Changes</button>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="card">
          <div className="card-header">
            <h3>Notifications</h3>
            <p>Manage how you receive alerts and notifications.</p>
          </div>

          <div className="card-body">
            <div className="checkbox-group">
              <input type="checkbox" defaultChecked />
              <div>
                <label>Email notifications</label>
                <p>Get notified when someone updates a record.</p>
              </div>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" defaultChecked />
              <div>
                <label>Weekly reports</label>
                <p>Receive a weekly summary of your dashboard activity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}