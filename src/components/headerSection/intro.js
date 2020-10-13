import React from "react";

const About = () => {
  return (
    <section className="container">
      <div className="section-1">
        <h1>Valeriia Vinnichenko</h1>
        <p>Junior Front-end Developer, Bachelor @KPI</p>
      </div>
      <button
        type="button"
        name="more"
        className="btn more"
        onClick={() => {
          window.scrollTo({ top: 700, behavior: "smooth" });
        }}
      >
        More
      </button>
    </section>
  );
};

export default About;
