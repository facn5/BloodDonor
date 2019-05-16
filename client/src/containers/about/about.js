import React, { Component } from "react";
// import Card from "../../components/card/card";
import TeamMember from "../../components/TeamMember/TeamMember";
import { relative } from "path";

const About = () => {
  return (
    <div style={{ position: "relative", height: 94 + "vh" }}>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <h3>Our goal</h3>
      <div className="cardDetails">
        <div className="subContainer">
          Our goal is to reach more and more good people like you so we can save
          more people lives. Mother’s tears cannot save her child’s life but
          your blood can.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: 100 + "%",
          bottom: 0
        }}
      >
        Team:-
        <div className="cardDetails">
          <div
            className="subContainer"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: 100 + "%"
            }}
          >
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
