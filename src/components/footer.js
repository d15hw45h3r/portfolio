import React from "react";
import "../App.css";
import "../font-awesome-4.7.0/css/font-awesome.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="contacts">
            <a
              href="mailto:vinnichenkovaleriaa@gmail.com"
              className="contact fa fa-envelope"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>mail</span>
            </a>
            <a
              href="https://telegram.me/d15hw45h3r"
              className="contact fa fa-paper-plane"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>telegram</span>
            </a>
            <a
              href="https://github.com/d15hw45h3r"
              className="contact fa fa-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/valeriia-vinnichenko-95592a1b2/"
              className="contact fa fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>linkedin</span>
            </a>
          </div>
          <div className="credits">
            <p className="en">© Valeriia Vinnichenko</p>
            <button className="button-lang-en">Русский</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
