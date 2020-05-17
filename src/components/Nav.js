import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import Today from "./Today";

const Nav = () => {
  const context = useContext(CalendarContext);
  return (
    <nav
      style={{
        backgroundColor: "rgb(235, 235, 235)",
        padding: "10px 3px 10px 3px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ textShadow: "2px 2px 5px #b5b5b5", color: "#ff575f" }}>
          Dayplanner+
        </h3>
        <Today />
        <button
          className="addEvent"
          style={{
            backgroundColor: "#ff575f",
            height: "30px",
            border: "1px",
            borderRadius: "5px",
            fontWeight: "bolder",
            color: "white",
          }}
          onClick={context[4]}
        >
          Add Event
        </button>
      </div>
    </nav>
  );
};

export default Nav;
