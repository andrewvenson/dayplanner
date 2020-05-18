import React, { useState, useEffect } from "react";
import moment from "moment";

const Today = () => {
  const [today, setToday] = useState({
    day: "",
    dayName: "",
  });

  useEffect(() => {
    const daystr = moment().format("dddd");
    const daynum = moment().format("Do");

    setToday({ ...today, day: daynum, dayName: daystr });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "25px",
        padding: "10px",
        backgroundColor: "#32dba3",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ margin: "0px", fontWeight: "bold", color: "white" }}>
          {today.day}
        </span>
        <p style={{ color: "white", margin: "0px" }}>-</p>
        <span style={{ margin: "0px", fontWeight: "bold", color: "white" }}>
          {today.dayName}
        </span>
      </div>
    </div>
  );
};

export default Today;
