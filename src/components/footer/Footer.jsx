import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">SANOOP PR</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="https://www.instagram.com/sanoop287" target="blank" className="home_social-icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/sanoop-pr" target="blank" className="home_social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Sanoop-PR" target="blank" className="home_social-icon">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer_copy">
            &#169; All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
