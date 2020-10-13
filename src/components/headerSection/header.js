import React, { useState } from "react";
import logo from "../../img/logo.png";
import "../../App.css";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  let head;

  const checkScroll = () => {
    if (!scroll && window.pageYOffset > 610) {
      setScroll(true);
    } else if (scroll && window.pageYOffset <= 610) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", checkScroll);

  if (scroll) {
    head = (
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
      </header>
    );
  } else {
    head = (
      <header className="header-alt">
        <div className="container">
          <a href="/" className="logo">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
      </header>
    );
  }

  return <div className="header-wrap">{head}</div>;
};

export default Header;
