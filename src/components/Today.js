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
  }, []);

  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "50%",
        padding: "10px",
        backgroundColor: "#32dba3",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "0px", fontWeight: "bold", color: "white" }}>
          {today.day}
        </p>
      </div>
      <p style={{ margin: "0px", fontWeight: "bold", color: "white" }}>
        {today.dayName}
      </p>
    </div>
  );
};

export default Today;
