import React from "react";
import logo from "../../img/logo.png";
import "../../App.css";

const HeaderAlt = () => {
  return (
    <header className="header-alt">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
    </header>
  );
};

export default HeaderAlt;
