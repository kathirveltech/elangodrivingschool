import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <button
        className="btn btn-dark d-none d-md-inline-flex align-items-center"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars"></i>
      </button>

      <span className="navbar-brand ms-2">
        Sri Elango Driving School
      </span>

      <div>
        <i className="fas fa-user-circle text-white fs-4"></i>
      </div>
    </nav>
  );
};

export default Header;
