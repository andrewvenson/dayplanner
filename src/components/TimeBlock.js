import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";

const TimeBlock = (props) => {
  // context for calendar
  const context = useContext(CalendarContext);
  // button styles
  const event = {
    margin: "4px 2px 0px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    fontSize: "12px",
    zIndex: "999px",
    minWidth: "88px",
  };

  // Change hour block color depending on time
  let backcolor = "#fafafa";
  if (parseInt(props.hour) === parseInt(context[2].current)) {
    backcolor = "#f2acb1";
  } else if (parseInt(props.hour) <= parseInt(context[2].current)) {
    backcolor = "lightgray";
  } else {
    backcolor = "lightgreen";
  }

  // time block style
  const blockStyle = {
    height: "75px",
    color: "gray",
    borderTop: "1px solid #ededed",
    marginBottom: "0px",
    cursor: "pointer",
    overflow: "hidden",
    overflowX: "scroll",
    backgroundColor: backcolor,
  };

  return (
    <div className="timeBlock" style={blockStyle}>
      <div
        style={{ display: "flex", height: "100%" }}
        onClick={() => {
          context[4]();
        }}
      >
        <p style={{ fontSize: "12px" }}>{props.time}</p>

        {props.event.map((title, index) => {
          if (props.time === title[Object.keys(title).toString()][2]) {
            return (
              <button
                key={index}
                className="eventButton"
                style={event}
                onClick={(e) => {
                  e.stopPropagation();
                  // Display modal with title, description and time
                  console.log(
                    Object.keys(title).toString(),
                    title[Object.keys(title).toString()][0],
                    title[Object.keys(title).toString()][1]
                  );
                }}
              >
                <span>
                  {Object.keys(title).toString()} -{" "}
                  {title[Object.keys(title).toString()][1]}
                </span>
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default TimeBlock;
