import React from "react";
import logo from "../../img/logo.png";
import "../../App.css";

const Header = () => {
  return (
    <header className="header-alt container">
      <a href="" className="logo">
        <img src={logo} alt="logo"></img>
      </a>
    </header>
  );
};

export default Header;
