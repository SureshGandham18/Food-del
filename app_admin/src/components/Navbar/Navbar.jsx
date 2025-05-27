import React from "react";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/add">
        <div className="logo">
          <span className="first">Tasty</span>
          <span className="second">Go</span>
        </div>
        <p>Admin Panel</p>
      </Link>
      <FaUser className="profile"/>
    </div>
  );
};

export default Navbar;
