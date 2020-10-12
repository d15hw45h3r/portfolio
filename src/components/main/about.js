import React from "react";
import "../../App.css";
import cv from "../../files/cv.pdf";

const About = () => {
  return (
    <section className="container">
      <div className="section-2">
        <h2>About me</h2>
        <p>
          Hi! My name is Valeriia. I am a 4th year student and I want to start
          my career in Web development field.
        </p>
        <p>
          When I started learning web design, I didn`t even thought that I`ll
          start to have interest for something else. But then I discovered that
          I want to make my own web sites. So I started learning HTML and CSS.
          Then I wanted to do more things, so I`m learning JavaScript and
          React.js now.
        </p>
        <p>
          I want to move forward and learn more interesting features and to
          improve myself every day.
        </p>
      </div>
      <a
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cv en"
      >
        My CV
      </a>
    </section>
  );
};

export default About;
