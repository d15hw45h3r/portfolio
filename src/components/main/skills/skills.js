import React from "react";
import "../../../App.css";
import styled from "@emotion/styled";

import SkillList from "./skill-list";

const Skills = () => {
  const SkillData = [
    [
      "layouts, positioning",
      "display, box, grid, flex-box",
      "responsive design",
      "animation",
      "svg pictures",
      "emotion",
    ],
    [
      "DOM manipulation",
      "fetch API / Ajax",
      "ES6 / modular JS",
      "hooks",
      "template manipulation",
    ],
  ];
  const Skill = styled.div`
    width: 80%;
  `;
  return (
    <section className="container">
      <div className="section-3">
        <h2>Skills</h2>
        <dl className="skills-list">
          <div className="wrap-list">
            <div className="wrap">
              <dt className="skill">HTML / CSS</dt>
              <dt className="en">(1 year)</dt>
              <dd className="level">
                <Skill></Skill>
              </dd>
            </div>
            <SkillList skills={SkillData[0]} />
          </div>
          <div className="wrap-list">
            <div className="wrap">
              <dt className="skill">JS / React.js</dt>
              <dt className="en">(5 mon)</dt>
              <dd className="level">
                <Skill></Skill>
              </dd>
            </div>
            <SkillList skills={SkillData[1]} />
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Skills;
