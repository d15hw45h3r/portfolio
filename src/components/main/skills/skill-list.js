import React from "react";
import "../../../App.css";

const SkillList = ({ skills }) => {
  return (
    <ul>{skills && skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
  );
};

export default SkillList;
