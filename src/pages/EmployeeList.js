import React from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  const owner = {
    name: "Sri Elango Driving School",
    role: "Owner: Babu  |  Manager: Sheela",
  };

  const offices = [
    {
      id: 1,
      name: "Neyveli Office",
      staff: { name: "Hency", role: "Staff", phone: "93857 99001" },
      instructor: { name: "Thirumurugan", role: "Instructor" },
    },
    {
      id: 2,
      name: "Indiranagar Office",
      staff: { name: "Harini", role: "Staff", phone: "93857 99002" },
      instructor: { name: "Karthick", role: "Instructor" },
    },
    {
      id: 3,
      name: "Vadalur Office",
      staff: { name: "Sheela", role: "Staff", phone: "93857 99003" },
      instructor: { name: "Kathirvel", role: "Instructor" },
    },
  ];

  return (
    <div className="employee-list-page">
      <div className="container-fluid py-4">
        {/* Owner / Manager at top */}
        <div className="owner-card mb-4">
          <div className="owner-card-inner">
            <div className="owner-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="owner-info">
              <span className="owner-role">{owner.role}</span>
              <h2 className="owner-name">{owner.name}</h2>
            </div>
          </div>
        </div>

        <h4 className="section-title mb-3">
          <i className="fas fa-building me-2"></i>
          Office View — Employee Details
        </h4>

        <div className="row g-4">
          {offices.map((office) => (
            <div key={office.id} className="col-12 col-lg-4">
              <div className="office-card">
                <div className="office-card-header">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  {office.name}
                </div>
                <div className="office-card-body">
                  <div className="employee-row">
                    <div className="employee-badge staff">
                      <i className="fas fa-user"></i>
                      <span className="label">Staff</span>
                    </div>
                    <div className="employee-name">
                      <div>{office.staff.name}</div>
                      {office.staff.phone && (
                        <div className="employee-phone">
                          <i className="fas fa-phone-alt me-1"></i>
                          {office.staff.phone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="employee-row">
                    <div className="employee-badge instructor">
                      <i className="fas fa-chalkboard-teacher"></i>
                      <span className="label">Instructor</span>
                    </div>
                    <span className="employee-name">{office.instructor.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
