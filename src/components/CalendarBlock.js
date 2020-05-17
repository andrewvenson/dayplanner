import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import TimeBlock from "./TimeBlock";
import AddBlockModal from "./AddBlockModal";
import { Container } from "react-bootstrap";

const CalendarBlock = () => {
  const context = useContext(CalendarContext);

  return (
    <Container
      style={{
        height: "85vh",
        border: "1px solid #ededed",
        overflow: "hidden",
        overflowY: "scroll",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        backgroundColor: "whitesmoke",
      }}
    >
      <TimeBlock event={context[5]} time="12 AM" hour="0" />
      <TimeBlock event={context[5]} time="1 AM" hour="1" />
      <TimeBlock event={context[5]} time="2 AM" hour="2" />
      <TimeBlock event={context[5]} time="3 AM" hour="3" />
      <TimeBlock event={context[5]} time="4 AM" hour="4" />
      <TimeBlock event={context[5]} time="5 AM" hour="5" />
      <TimeBlock event={context[5]} time="6 AM" hour="6" />
      <TimeBlock event={context[5]} time="7 AM" hour="7" />
      <TimeBlock event={context[5]} time="8 AM" hour="8" />
      <TimeBlock event={context[5]} time="9 AM" hour="9" />
      <TimeBlock event={context[5]} time="10 AM" hour="10" />
      <TimeBlock event={context[5]} time="11 AM" hour="11" />
      <TimeBlock event={context[5]} time="12 PM" hour="12" />
      <TimeBlock event={context[5]} time="1 PM" hour="13" />
      <TimeBlock event={context[5]} time="2 PM" hour="14" />
      <TimeBlock event={context[5]} time="3 PM" hour="15" />
      <TimeBlock event={context[5]} time="4 PM" hour="16" />
      <TimeBlock event={context[5]} time="5 PM" hour="17" />
      <TimeBlock event={context[5]} time="6 PM" hour="18" />
      <TimeBlock event={context[5]} time="7 PM" hour="19" />
      <TimeBlock event={context[5]} time="8 PM" hour="20" />
      <TimeBlock event={context[5]} time="9 PM" hour="21" />
      <TimeBlock event={context[5]} time="10 PM" hour="22" />
      <TimeBlock event={context[5]} time="11 PM" hour="23" />
      <AddBlockModal />
    </Container>
  );
};

export default CalendarBlock;
