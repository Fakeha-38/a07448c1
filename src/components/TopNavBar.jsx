import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/TopNavBar.scss';
import { FiPhoneCall } from "react-icons/fi";

const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <div className="logo">
        <FiPhoneCall className="logo-icon" />
        <h1 className="logo-text">AirCall</h1>
      </div>
      <div className="nav-buttons">
        <h2>Activity</h2>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'button active' : 'button non-active'}>
          All Calls
        </NavLink>

        <NavLink 
          to="/archived" 
          className={({ isActive }) => isActive ? 'button active' : 'button non-active'}>
          Archived Calls
        </NavLink>
      </div>
    </div>
  );
};

export default TopNavBar;
