import React from 'react'
import './Sidebar.css'
import { FiPlusCircle } from "react-icons/fi";
import { FaRectangleList } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/' className="sidebar-option">
                <FiPlusCircle/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to = '/list' className="sidebar-option">
                <FaRectangleList/>
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <FaClipboardList/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar