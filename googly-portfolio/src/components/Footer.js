import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="country">
        Bengaluru, India
      </div>
      <div className="footer-links">
        <div className="footer-links-section">
          <Link to="/education"> Education </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/skills"> Skills</Link>
          <a href="mailto:aditi03prasad@gmail.com"> Email </a>
       
        </div>
      </div>
      
      {/* New section for "Developed by Aditi" and copyright */}
     
    </footer>
  );
};

export default Footer;
