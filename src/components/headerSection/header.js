import React, { useState } from "react";
import logo from "../../img/logo.png";
import "../../App.css";
import { useTransition, animated } from "react-spring";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const transitions = useTransition(scroll, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const checkScroll = () => {
    if (!scroll && window.pageYOffset > 500) {
      setScroll(true);
    } else if (scroll && window.pageYOffset <= 500) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", checkScroll);
  return (
    <div className="header-wrap">
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <header className="header">
                <div className="container">
                  <a href="/" className="logo">
                    <img src={logo} alt="logo"></img>
                  </a>
                </div>
              </header>
            </animated.div>
          )
      )}
    </div>
  );
};

export default Header;
