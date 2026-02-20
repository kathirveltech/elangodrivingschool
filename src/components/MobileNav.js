import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="mobile-bottom-nav d-md-none">
      <NavLink to="/" end className="mobile-nav-item">
        <i className="fas fa-chart-line"></i>
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/instructors" className="mobile-nav-item">
        <i className="fas fa-chalkboard-teacher"></i>
        <span>Instructors</span>
      </NavLink>
      <NavLink to="/students" className="mobile-nav-item">
        <i className="fas fa-user-graduate"></i>
        <span>Students</span>
      </NavLink>
      <NavLink to="/bookings" className="mobile-nav-item">
        <i className="fas fa-calendar-alt"></i>
        <span>Bookings</span>
      </NavLink>
      <NavLink to="/vehicles" className="mobile-nav-item">
        <i className="fas fa-car-side"></i>
        <span>Vehicles</span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;

