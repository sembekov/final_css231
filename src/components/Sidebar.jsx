import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import { FaUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Profile Menu</h3>
      <ul>
        <li>
          <FaUser className="icon" />
          <NavLink to="/profile" activeClassName="active">Profile</NavLink>
        </li>
        <li>
          <FaRegListAlt className="icon" />
          <NavLink to="/your-orders" activeClassName="active">Your Orders</NavLink>
        </li>
        <li>
          <RiLogoutBoxLine className="icon" />
          <NavLink to="/" activeClassName="active">Sign Out</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;