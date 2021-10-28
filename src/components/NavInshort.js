import React from "react";
import "./NavInshort.css";
import HamburgerDrawer from "./HamburgerDrawer";
//import logo from './../images/thebull'


const NavInshort = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="./../../images/thebulletins.png"
        height="220%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshort;
