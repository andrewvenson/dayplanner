import React, { useState } from "react";

const TimeBlock = (props) => {
  const event = {
    margin: "4px 2px 0px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    fontSize: "12px",
    boxShadow: "0px 2px 3px lightgray",
  };

  // Here is the state, each time interval can have multiple keys within an object, The 1 index to array will be the title, 2nd index will be the description
  const [time, setEvents] = useState([
    { sleep: ["sleepy time", "1:45AM", "1 AM"] },
    { basketball: ["hoop with my nephew", "2:00PM", "2 PM"] },
    { code: ["learn angular for new job", "1:30AM", "1 AM"] },
    { algorithms: ["study algorithms for interviews", "3:45PM", "3 PM"] },
  ]);

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

        {time.map((title, index) => {
          console.log(props.time);
          console.log(Object.keys(title).toString());
          console.log(title[Object.keys(title).toString()][1]);

          if (props.time === title[Object.keys(title).toString()][2]) {
            return (
              <button key={index} style={event}>
                <span>
                  {Object.keys(title).toString()} -{" "}
                  {title[Object.keys(title).toString()][1]}
                </span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TimeBlock;
