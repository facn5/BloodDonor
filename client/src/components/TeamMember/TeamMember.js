import React, { Component } from "react";
import "./TeamMember.css";
import "../card/styles.css";

const TeamMember = props => {
  return (
    <>
      <div className="memberContainer">
        <img className="img" src={props.photo}></img>
        <div>{props.name}</div>
      </div>
    </>
  );
};

export default TeamMember;
