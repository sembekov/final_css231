import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import { FaBars, FaUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      {}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3>Profile Menu</h3>
        <ul>
          <li>
            <FaUser className="icon" />
            <NavLink to="/profile" activeClassName="active">Profile</NavLink>
          </li>
          <li>
            <RiLogoutBoxLine className="icon" />
            <NavLink to="/home" activeClassName="active">Sign Out</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
