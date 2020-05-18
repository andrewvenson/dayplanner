import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";

const TimeBlock = (props) => {
  // context for calendar
  const context = useContext(CalendarContext);

  // button styles
  const event = {
    margin: "4px 2px 2px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    fontSize: "12px",
    zIndex: "999px",
    minWidth: "88px",
    backgroundColor: "whitesmoke",
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
        style={{ display: "flex", height: "100%", paddingLeft: "2px" }}
        onClick={() => {
          context[4]();
        }}
      >
        <p style={{ fontSize: "12px", width: "20px" }}>{props.time}</p>
        {props.event.map((title, index) => {
          if (props.time === title[Object.keys(title).toString()][2]) {
            return (
              <button
                key={index}
                className="eventButton"
                style={event}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(Object.keys(title).toString());
                  console.log(title[Object.keys(title).toString()][0]);
                  console.log(title[Object.keys(title).toString()][1]);
                  context[11]({
                    ...context[10],
                    title: Object.keys(title).toString(),
                    description: title[Object.keys(title).toString()][0],
                    time: title[Object.keys(title).toString()][1],
                  });
                  context[8]();
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
