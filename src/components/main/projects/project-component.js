import React from "react";
import "../../../App.css";

const ProjectItem = ({ link, header, description, image }) => {
  return (
    <a
      href={link}
      className="project"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="detail">
        <div className="project-content">
          <h2>{header}</h2>
          <p>{description}</p>
          <img src={image} alt="project" />
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
