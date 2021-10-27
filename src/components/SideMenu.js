import React from "react";
import logo from "../assets/logo/tIiLSAc.png";

const SideMenu = (props) => {
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-menu-btn">
          <i className="bi bi-arrow-left-square-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;