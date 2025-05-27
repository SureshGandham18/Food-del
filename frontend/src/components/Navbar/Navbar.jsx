import React, { useContext, useState } from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <span className="first">Tasty</span>
          <span className="second">Go</span>
        </div>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
          }}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => {
            setMenu("menu");
          }}
        >
          menu
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => {
            setMenu("mobile-app");
          }}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => {
            setMenu("contact-us");
          }}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <IoSearch className="icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <MdShoppingBasket className="icon" />
          </Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <RiAccountCircleFill size={27} className="profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate("/myorders")}>
                <FaBagShopping size={20} />
                <p>Orders</p>
              </li>
              
              <hr />
              <li onClick={logout}>
                <IoLogOutOutline size={20}/>
                <p>Logout</p>
              </li>
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
