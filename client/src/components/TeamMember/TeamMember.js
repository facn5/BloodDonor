import React, { Component } from "react";
import "./TeamMember.css";
import "../card/styles.css";

const TeamMember = props => {
  return (
    <>
      <div className="memberContainer">
        <div className="memberSubContainer" />
        <div>{props.name}</div>
      </div>
    </>
  );
};

export default TeamMember;
