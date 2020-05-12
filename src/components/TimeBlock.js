import React, { useState } from "react";

const TimeBlock = (props) => {
  const event = {
    margin: "3px 2px 0px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
  };
  return (
    <div
      className="timeBlock"
      style={{
        height: "50px",
        color: "gray",
        borderTop: "1px solid #ededed",
        marginBottom: "0px",
      }}
    >
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "12px" }}>{props.time}</p>
        <button style={event}>test</button>
        <button style={event}>test</button>
        <button style={event}>test</button>
      </div>
    </div>
  );
};

export default TimeBlock;
