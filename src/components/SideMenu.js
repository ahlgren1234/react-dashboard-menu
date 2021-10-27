import React, { useState } from "react";
import logo from "../assets/logo/tIiLSAc.png";
import user from "../assets/johndoe-avatar.png";

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <a href="#" className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-newspaper"></i>
              </div>
              Content
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-vector-pen"></i>
              </div>
              Design
            </a>
          </li>
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user avatar" />
        </div>
        <div className="user-info">
          <h5>John Doe</h5>
          <p>johndoe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
