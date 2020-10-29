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
          First of all, I have a desire to learn. Since programming is a
          practical subject, it needs a lot of practice, but imaginary projects
          don`t give enough of experience for real development. I would like to
          see how teamwork is arranged in this field.
        </p>
        <p>
          While studying something new I go into subtleties. I consider myself
          dedicated and commited.
        </p>
      </div>
      <a href={cv} target="_blank" rel="noopener noreferrer" className="btn-cv">
        My CV
      </a>
    </section>
  );
};

export default About;
