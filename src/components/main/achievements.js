import React from "react";
import "../../App.css";

const Achievements = () => {
  return (
    <section className="container">
      <div className="section-4">
        <h2>Achievements</h2>
        <div className="ach-wrap">
          <div className="ach-section">
            <h3>Education</h3>
            <p>Igor Sikorsky Kyiv Polytechnic Institute, 2017-2021</p>
            <p>Faculty: Informatics and Computer Technology</p>
            <p>Specialty: Computer Engineeging</p>
          </div>
          <div className="ach-section">
            <h3>First Certificate in English</h3>
            <p>Cambridge English Level 1 Certificate in ESOL International</p>
            <p>Level B2</p>
            <p>Examination Date: May 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
