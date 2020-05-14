import React, { useState, useEffect } from "react";
import firebase from "../Firebase";
import TimeBlock from "./TimeBlock";
import { Container } from "react-bootstrap";

const CalendarBlock = () => {
  const [time, setEvents] = useState([
    { sleep: ["sleepy time", "4:45AM", "4 AM"] },
    { basketball: ["hoop with my nephew", "2:00PM", "2 PM"] },
    { code: ["learn angular for new job", "2:30PM", "2 PM"] },
    { algorithms: ["study algorithms for interviews", "3:45PM", "3 PM"] },
  ]);

  const [block, setBlockEvent] = useState({
    title: "",
    description: "",
    time: "",
    timeblk: "",
  });

  const db = firebase.firestore();

  let event = db.collection("events");

  useEffect(() => {
    event
      .get()
      .then((snapshot) => {
        let myEvents = [];
        snapshot.forEach((doc) => {
          if (doc.id === "event") {
            console.log(doc.data());
            for (var x in doc.data()) {
              myEvents.push(doc.data()[x]);
            }
          }
        });
        setEvents(myEvents);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }, []);

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
        <TimeBlock
          event={time}
          setevent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="12 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="1 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="2 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="3 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="4 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="5 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="6 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="7 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="8 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="9 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="10 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="11 AM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="12 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="1 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="2 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="3 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="4 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="5 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="6 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="7 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="8 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="9 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="10 PM"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="11 PM"
        />
      </Container>
    </>
  );
};

export default CalendarBlock;
