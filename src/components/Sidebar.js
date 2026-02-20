import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebarOpen, onLinkClick }) => {
  return (
    <div className={`sidebar bg-light ${sidebarOpen ? "open" : "closed"}`}>
      <ul className="list-unstyled p-3 mb-0">
        <li>
          <NavLink to="/" end className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-chart-line"></i>
            <span className="ms-2">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructors"
            className="nav-link"
            onClick={onLinkClick}
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <span className="ms-2">Instructors</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-user-graduate"></i>
            <span className="ms-2">Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-calendar-alt"></i>
            <span className="ms-2">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/vehicles" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-car-side"></i>
            <span className="ms-2">Vehicles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/documents" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-file-alt"></i>
            <span className="ms-2">Documents</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/payments" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-credit-card"></i>
            <span className="ms-2">Payments</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-chart-bar"></i>
            <span className="ms-2">Reports</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="nav-link" onClick={onLinkClick}>
            <i className="fas fa-cog"></i>
            <span className="ms-2">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
