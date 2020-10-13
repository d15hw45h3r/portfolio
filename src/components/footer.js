import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="contacts">
            <a
              href="mailto:vinnichenkovaleriaa@gmail.com"
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <span>mail</span>
            </a>
            <a
              href="https://telegram.me/d15hw45h3r"
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <span>telegram</span>
            </a>
            <a
              href="https://github.com/d15hw45h3r"
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <span>github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/valeriia-vinnichenko-95592a1b2/"
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
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
