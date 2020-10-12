import React from "react";
import "../../../App.css";

import ProjectItem from "./project-component";

import img from "../../../files/react-calculator.png";
import img2 from "../../../files/weather-project.png";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <ProjectItem
          link="https://valeriias-react-calculator.netlify.app/"
          header="React calculator"
          description="This is the description"
          image={img}
        />
        <ProjectItem
          link="https://github.com/d15hw45h3r/react-weather"
          header="Weather app"
          description="This is a description"
          image={img2}
        />
      </div>
    </section>
  );
};

export default Projects;
