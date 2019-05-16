import React, { Component } from "react";
import "./TeamMember.css";

const TeamMember = props => {
  return (
    <>
      <div className="member-container">
        <div className="member-subcontainer" />
        <div>{props.name}</div>
      </div>
    </>
  );
};

export default User;
