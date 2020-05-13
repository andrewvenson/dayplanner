import React, { useState } from "react";

const TimeBlock = (props) => {
  const event = {
    margin: "3px 2px 0px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    fontSize: "12px",
  };

  // Here is the state, each time interval can have multiple keys within an object, The 1 index to array will be the title, 2nd index will be the description
  const [time, setEvents] = useState({
    "1 AM": {
      "1:30AM": ["Play Basketball", "Play basketball with my little nephew"],
      "1:45AM": ["Study Algorithms", "study sort, search, and recursion"],
    },
    "2 AM": { "2:30AM": ["Code", "work on learning React"] },
    "3 AM": { "": [] },
  });

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

        {/* This is the code in question, only displays one time block  */}
        {/* If you look at the console output you'll see what I'm trying to display within each time block */}
        {[time].map((index) => {
          for (var x in index) {
            for (var block in index[x]) {
              console.log(block, index[x][block][0]);
              if (block !== "" && x === props.time)
                return (
                  <button key={index[x]} style={event}>
                    {index[x][block][0]}
                    <span> - {block}</span>
                  </button>
                );
            }
          }
        })}
      </div>
    </div>
  );
};

export default TimeBlock;
