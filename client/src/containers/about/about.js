import React, { Component } from "react";
import "./about.css";
import TeamMember from "../../components/TeamMember/TeamMember";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="center">About</h1>
      <h3>Our goal</h3>
      <div className="cardDetails">
        <div className="subContainer">
          Our goal is to reach more and more good people like you so we can save
          more people lives. Mother’s tears cannot save her child’s life but
          your blood can.
        </div>
      </div>
      <div className="teamMembers-section">
        Team:-
        <div className="cardDetails">
          <div className="teamMembers-subcontainer">
            <TeamMember name="Tamer" />
            <TeamMember name="Obaydah" />
            <TeamMember name="Majd" />
            <TeamMember name="Karam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
