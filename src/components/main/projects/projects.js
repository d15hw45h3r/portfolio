import React from "react";
import "../../../App.css";

import ProjectItem from "./project-component";

import img from "../../../files/react-calculator.png";
import img2 from "../../../files/weather-project.png";
import img3 from "../../../files/todo-list.png";

const Projects = () => {
  return (
    <section>
      <div className="projects">
        <ProjectItem
          link="https://d15hw45h3r.github.io/calculator/"
          header="React calculator"
          description="This is my first project using React."
          image={img}
        />
        <ProjectItem
          link="https://github.com/d15hw45h3r/react-weather"
          header="Weather app"
          description="A set of weather cards using OpenWeatherMap API."
          image={img2}
        />
        <ProjectItem
          link="https://d15hw45h3r.github.io/todo-list/"
          header="Todo List"
          description="This is a simple todo list created to practice useState."
          image={img3}
        />
      </div>
    </section>
  );
};

export default Projects;
