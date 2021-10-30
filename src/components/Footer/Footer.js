import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
       
      <span className="aboutUs" >
         <span  style={{fontSize: "25px", fontWeight: "500", justifyContent: "center"}}>About us -</span>
        <br/> Through the bulletins.in you will continue get the latest news from the country to abroad, along with important stories and political analysis about politics things related to sports, social media and many more.
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="mailto:thebulletins45@gmail.com" target="_top">
          <span style={{fontSize: "25px", fontWeight: "500"}}>Contact us    </span>
        </a>
        <a href="www.thebulletins.in" target="__blank">
         <i className="fab fa-whatsapp fa-2x"></i>
        </a>
        <a href="www.thebulletins.in" target="__blank">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>

      <hr style={{ width: "90%" }} />
      <span className="name" >
         Made by -
        <a href="https://www.linkedin.com/in/divyanshu-shukla-15a01a17b/" target="__blank">
          Divyanshu shukla
        </a>
      </span>
    </div>
  );
};

export default Footer;
