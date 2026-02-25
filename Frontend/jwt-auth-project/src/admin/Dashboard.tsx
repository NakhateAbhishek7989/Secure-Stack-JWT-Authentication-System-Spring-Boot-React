
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 3200 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 4300 },
  { name: "Jul", total: 4100 },
];

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: DollarSign,
    trend: "+20.1%",
    trendUp: true,
  },
  {
    title: "Active Users",
    value: "2,350",
    icon: Users,
    trend: "+15.2%",
    trendUp: true,
  },
  {
    title: "Activity Rate",
    value: "84.2%",
    icon: Activity,
    trend: "-4.5%",
    trendUp: false,
  },
];

export function Dashboard() {
  return (
    <>
      <style>{`
        .dashboard {
          padding: 24px;
          font-family: Arial, sans-serif;
          background-color: #f8fafc;
        }

        .download-btn {
          background-color: #4f46e5;
          color: white;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        .download-btn:hover {
          background-color: #4338ca;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-title {
          font-size: 14px;
          color: #64748b;
        }

        .stat-value {
          font-size: 28px;
          font-weight: bold;
          margin-top: 8px;
          color: #1e293b;
        }

        .icon-wrapper {
          background: #eef2ff;
          padding: 12px;
          border-radius: 50%;
        }

        .trend {
          margin-top: 15px;
          display: flex;
          align-items: center;
          font-size: 14px;
        }

        .trend.up {
          color: #10b981;
        }

        .trend.down {
          color: #ef4444;
        }

        .chart-container {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .chart-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #1e293b;
        }

        .chart-wrapper {
          width: 100%;
          height: 320px;
        }

        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 16px;
          }

          .dashboard-title {
            font-size: 28px;
            font-weight: 700;
            margin: 0;
            color: #1e293b;
          }

          .dashboard-subtitle {
            margin-top: 6px;
            color: #64748b;
            font-size: 15px;
          }

          .gradient-text {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .download-btn-modern {
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 10px 18px;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .download-btn-modern:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
          }

      `}</style>

      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h2 className="dashboard-title">
              Dashboard <span className="gradient-text">Overview</span>
            </h2>
            <p className="dashboard-subtitle">
              Here's what's happening with your project today.
            </p>
          </div>

          <button className="download-btn-modern">
            Download Report
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.title} className="stat-card">
              <div className="stat-top">
                <div>
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
                <div className="icon-wrapper">
                  <stat.icon size={22} color="#4f46e5" />
                </div>
              </div>

              <div className={`trend ${stat.trendUp ? "up" : "down"}`}>
                {stat.trendUp ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                <span style={{ marginLeft: "6px" }}>{stat.trend}</span>
                <span style={{ marginLeft: "8px", color: "#64748b" }}>
                  from last month
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="chart-container">
          <div className="chart-title">Revenue Overview</div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}