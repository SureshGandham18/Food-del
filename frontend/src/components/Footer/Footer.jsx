import React from 'react'
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="left">
            <div className='logo'><span className='first'>Tasty</span><span className='second'>Go</span></div>
            <p>Order your favorites now and enjoy a delightful dining experience, whether at home or on the go!</p>
            <div className="footer-social-icons">
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaLinkedin className='icon'/>
            </div>
            </div>
            <div className="center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9802132736</li>
                    <li>contact@tastygo.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 TastyGo.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer