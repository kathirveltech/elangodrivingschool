import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../Dashboard.css";

const kpiCards = [
  {
    id: 1,
    label: "Total Students",
    icon: "fas fa-user-graduate",
    value: "248",
    change: "+12%",
  },
  {
    id: 2,
    label: "Total Instructors",
    icon: "fas fa-chalkboard-teacher",
    value: "18",
    change: "+5%",
  },
  {
    id: 3,
    label: "Active Vehicles",
    icon: "fas fa-car-side",
    value: "12",
    change: "+3%",
  },
  {
    id: 4,
    label: "Today’s Bookings",
    icon: "fas fa-calendar-check",
    value: "26",
    change: "+9%",
  },
];

const quickActions = [
  { id: 1, label: "Add Student", icon: "fas fa-user-plus" },
  { id: 2, label: "Schedule Class", icon: "fas fa-calendar-plus" },
  { id: 3, label: "Assign Vehicle", icon: "fas fa-car" },
  { id: 4, label: "Record Payment", icon: "fas fa-credit-card" },
];

const enrollmentData = [
  { month: "Jan", students: 22 },
  { month: "Feb", students: 30 },
  { month: "Mar", students: 27 },
  { month: "Apr", students: 35 },
  { month: "May", students: 40 },
  { month: "Jun", students: 38 },
];

const revenueData = [
  { month: "Jan", amount: 32 },
  { month: "Feb", amount: 45 },
  { month: "Mar", amount: 38 },
  { month: "Apr", amount: 52 },
  { month: "May", amount: 60 },
  { month: "Jun", amount: 58 },
];

const todaySchedule = [
  {
    id: 1,
    student: "Arun Kumar",
    instructor: "Karthick",
    time: "09:00 - 10:00 AM",
    vehicle: "TATA Punch",
    status: "Upcoming",
  },
  {
    id: 2,
    student: "Divya",
    instructor: "Sheela",
    time: "10:15 - 11:15 AM",
    vehicle: "Honda City",
    status: "Completed",
  },
  {
    id: 3,
    student: "Prakash",
    instructor: "Thirumurugan",
    time: "11:30 - 12:30 PM",
    vehicle: "Alto",
    status: "Upcoming",
  },
  {
    id: 4,
    student: "Meena",
    instructor: "Harini",
    time: "03:00 - 04:00 PM",
    vehicle: "TATA Punch",
    status: "Cancelled",
  },
];

const instructorWidget = {
  name: "Kathirvel",
  role: "Senior Instructor",
  status: "Available",
  nextClass: "Today, 4:30 PM — Arun Kumar",
  progress: 76,
  upcomingClasses: 4,
  completedLessons: 128,
  pendingPayments: 2,
};

const Dashboard = () => {
  return (
    <div className="dashboard-root container-fluid py-3 py-md-4">
      {/* Top: slogan & overview */}
      <div className="row align-items-center mb-3 mb-md-4">
        <div className="col-12 col-lg-8">
          <h2 className="dashboard-heading mb-1">
            முயற்சி – பயிற்சி – தேர்ச்சி…{" "}
            <span className="text-primary-strong">நிச்சயம் வெற்றி</span>
          </h2>
          <p className="dashboard-subtitle mb-0 text-muted">
            Smart control panel for Sri Elango Driving School — monitor
            students, instructors, vehicles and daily performance in one place.
          </p>
        </div>
      </div>

      {/* 1. KPI cards */}
      <div className="row g-3 mb-3 mb-md-4">
        {kpiCards.map((card) => (
          <div key={card.id} className="col-6 col-md-3">
            <div className="dashboard-card kpi-card">
              <div className="kpi-icon-wrapper">
                <i className={card.icon}></i>
              </div>
              <div className="kpi-main">
                <div className="kpi-value">{card.value}</div>
                <div className="kpi-label">{card.label}</div>
              </div>
              <div className="kpi-change text-success">{card.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Quick Actions */}
      <div className="row mb-3 mb-md-4">
        <div className="col-12">
          <div className="dashboard-card quick-actions-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="section-title mb-0">Quick Actions</h5>
            </div>
            <div className="row g-2 g-md-3">
              {quickActions.map((action) => (
                <div key={action.id} className="col-6 col-md-3">
                  <button className="quick-action-btn w-100">
                    <span className="quick-action-icon">
                      <i className={action.icon}></i>
                    </span>
                    <span className="quick-action-label">{action.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Charts */}
      <div className="row g-3 mb-3 mb-md-4">
        <div className="col-12 col-lg-7">
          <div className="dashboard-card h-100">
            <div className="card-header-alt">
              <h5 className="section-title mb-0">Monthly Enrollment</h5>
              <span className="section-caption">Last 6 months</span>
            </div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={enrollmentData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                  <YAxis tick={{ fill: "#6b7280" }} />
                  <Tooltip cursor={{ fill: "rgba(59,130,246,0.05)" }} />
                  <Bar
                    dataKey="students"
                    radius={[6, 6, 0, 0]}
                    fill="url(#enrollmentGradient)"
                  />
                  <defs>
                    <linearGradient
                      id="enrollmentGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="dashboard-card h-100">
            <div className="card-header-alt">
              <h5 className="section-title mb-0">Revenue Overview</h5>
              <span className="section-caption">Lakhs / month</span>
            </div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={revenueData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />
                  <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />
                  <YAxis tick={{ fill: "#6b7280" }} />
                  <Tooltip cursor={{ stroke: "#3B82F6", strokeWidth: 1 }} />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 4 & 5. Schedule + Instructor widget */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-xl-8">
          <div className="dashboard-card h-100">
            <div className="card-header-alt">
              <h5 className="section-title mb-0">Today&apos;s Schedule</h5>
              <span className="section-caption">Upcoming & completed classes</span>
            </div>
            <div className="table-responsive">
              <table className="table align-middle mb-0 dashboard-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Instructor</th>
                    <th>Time</th>
                    <th>Vehicle</th>
                    <th className="text-end">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {todaySchedule.map((row) => (
                    <tr key={row.id}>
                      <td>{row.student}</td>
                      <td>{row.instructor}</td>
                      <td>{row.time}</td>
                      <td>{row.vehicle}</td>
                      <td className="text-end">
                        <span
                          className={`status-badge status-${row.status.toLowerCase()}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="dashboard-card h-100 instructor-widget">
            <div className="card-header-alt mb-3">
              <h5 className="section-title mb-0">Instructor Availability</h5>
            </div>

            <div className="instructor-header mb-3">
              <div className="instructor-avatar">
                <span>K</span>
              </div>
              <div>
                <div className="instructor-name">{instructorWidget.name}</div>
                <div className="instructor-role">{instructorWidget.role}</div>
                <div className="instructor-status">
                  <span className="status-dot"></span>
                  {instructorWidget.status}
                </div>
              </div>
            </div>

            <div className="instructor-next mb-3">
              <div className="label">Next Class</div>
              <div className="value">{instructorWidget.nextClass}</div>
            </div>

            <div className="instructor-progress mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="label">Completed Lessons</span>
                <span className="value">{instructorWidget.progress}%</span>
              </div>
              <div className="progress progress-thin">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${instructorWidget.progress}%` }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="instructor-metrics mb-3">
              <div className="metric-item">
                <div className="metric-label">Upcoming Classes</div>
                <div className="metric-value">
                  {instructorWidget.upcomingClasses}
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Total Lessons</div>
                <div className="metric-value">
                  {instructorWidget.completedLessons}
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Pending Payments</div>
                <div className="metric-value highlight">
                  {instructorWidget.pendingPayments}
                </div>
              </div>
            </div>

            <button className="btn btn-primary w-100 reschedule-btn">
              <i className="fas fa-calendar-alt me-2"></i>
              Reschedule Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
