import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import Today from "./Today";

const Nav = () => {
  const context = useContext(CalendarContext);
  return (
    <nav
      style={{
        backgroundColor: "whitesmoke",
        padding: "10px 3px 10px 3px",
        borderBottom: "0px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3
          style={{
            textShadow: "2px 2px 5px #b5b5b5",
            color: "#ff575f",
          }}
        >
          Dayplanner+
        </h3>

        <button
          className="addEvent"
          style={{
            backgroundColor: "#ff575f",
            height: "30px",
            border: "1px",
            borderRadius: "5px",
            fontWeight: "bolder",
            color: "white",
            marginTop: "5px",
          }}
          onClick={context[4]}
        >
          Add Event
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Today />
      </div>
    </nav>
  );
};

export default Nav;
