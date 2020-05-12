import React from "react";
import Today from "./Today";

const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: "rgb(235, 235, 235)",
        padding: "10px 3px 10px 3px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ textShadow: "2px 2px 5px gray" }}>Dayplanner+</h3>
        <Today />
        <button
          class="addEvent"
          style={{
            backgroundColor: "#ff575f",
            height: "30px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          Add Event
        </button>
      </div>
    </nav>
  );
};

export default Nav;
