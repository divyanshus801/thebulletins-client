import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name" >
         Made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Divyanshu shukla
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/divyanshu-shukla-15a01a17b/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/divyanshus801" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
