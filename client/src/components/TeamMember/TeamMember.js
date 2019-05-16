import React, { Component } from "react";

const TeamMember = props => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 100 + "%"
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: "50%",
            height: 50,
            width: 50
          }}
        />
        <div>{props.name}</div>
      </div>
    </>
  );
};

export default User;
