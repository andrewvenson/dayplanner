import React from "react";

const TimeBlock = (props) => {
  return (
    <div
      className="timeBlock"
      style={{
        height: "50px",
        color: "gray",
        borderTop: "1px solid #ededed",
      }}
    >
      <p>{props.time}</p>
    </div>
  );
};

export default TimeBlock;
