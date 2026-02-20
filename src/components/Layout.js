import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleSidebarLinkClick = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header toggleSidebar={handleSidebarToggle} />

      <div className="d-flex flex-grow-1" style={{ overflow: "hidden" }}>
        <div className="d-none d-md-block">
          <Sidebar
            sidebarOpen={sidebarOpen}
            onLinkClick={handleSidebarLinkClick}
          />
        </div>
        <div className="content-area flex-grow-1 p-3">
          <Outlet />
        </div>
      </div>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Layout;
