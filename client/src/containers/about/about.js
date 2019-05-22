import React, { Component } from "react";
import "./about.css";
import TeamMember from "../../components/TeamMember/TeamMember";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="center">About</h1>
      <h3>Our goal</h3>
      <div className="cardDetails">
        <div className="subContainer">
          Our goal is to reach more and more good people like you so we can save
          more people lives. Mother’s tears cannot save her child’s life but
          your blood can.
        </div>
      </div>
      <div className="teamMembersSection">
        <p>Team:-</p>
        <div className="cardDetails">
          <div className="teamMembersSubContainer">
            <TeamMember name="Tamer" photo="https://avatars2.githubusercontent.com/u/14230328?s=400&v=4" />
            <TeamMember name="Obaydah" photo="https://avatars3.githubusercontent.com/u/6875484?s=400&v=4" />
            <TeamMember name="Majd" photo="https://avatars0.githubusercontent.com/u/33071567?s=400&v=4" />
            <TeamMember name="Karam" photo="https://avatars3.githubusercontent.com/u/46317630?s=400&v=4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
