import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TimeBlock from "./TimeBlock";

const CalendarBlock = () => {
  return (
    <>
      <Container
        style={{
          height: "85vh",
          border: "1px solid #ededed",
          overflow: "hidden",
          overflowY: "scroll",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <TimeBlock time="12 AM" />
        <TimeBlock time="1 AM" />
        <TimeBlock time="2 AM" />
        <TimeBlock time="3 AM" />
        <TimeBlock time="4 AM" />
        <TimeBlock time="5 AM" />
        <TimeBlock time="6 AM" />
        <TimeBlock time="7 AM" />
        <TimeBlock time="8 AM" />
        <TimeBlock time="9 AM" />
        <TimeBlock time="10 AM" />
        <TimeBlock time="11 AM" />
        <TimeBlock time="12 PM" />
        <TimeBlock time="1 PM" />
        <TimeBlock time="3 PM" />
        <TimeBlock time="4 PM" />
        <TimeBlock time="5 PM" />
        <TimeBlock time="6 PM" />
        <TimeBlock time="7 PM" />
        <TimeBlock time="8 PM" />
        <TimeBlock time="9 PM" />
        <TimeBlock time="10 PM" />
        <TimeBlock time="11 PM" />
      </Container>
    </>
  );
};

export default CalendarBlock;
