import React, { useState, useEffect } from "react";
import firebase from "../Firebase";
import TimeBlock from "./TimeBlock";
import { Container } from "react-bootstrap";

const CalendarBlock = () => {
  const [time, setEvents] = useState([]);

  const [block, setBlockEvent] = useState({
    title: "",
    description: "",
    time: "",
    timeblk: "",
    current: ""
  });

  const db = firebase.firestore();

  let event = db.collection("events");

  // pull data from firebase into state
  useEffect(() => {
    event
      .get()
      .then((snapshot) => {
        let myEvents = [];
        snapshot.forEach((doc) => {
          if (doc.id === "event") {
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
  }, [time]);


  useEffect(() => {
    const date = new Date()

    let currentTime = date.getHours();
    let currentTimeToString = currentTime.toString()
  
    setBlockEvent({...block, current: currentTimeToString})

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
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="12 AM"
          hour="0"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="1 AM"
          hour="1"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="2 AM"
          hour="2"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="3 AM"
          hour="3"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="4 AM"
          hour="4"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="5 AM"
          hour="5"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="6 AM"
          hour="6"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="7 AM"
          hour="7"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="8 AM"
          hour="8"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="9 AM"
          hour="9"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="10 AM"
          hour="10"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="11 AM"
          hour="11"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="12 PM"
          hour="12"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="1 PM"
          hour="13"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="2 PM"
          hour="14"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="3 PM"
          hour="15"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="4 PM"
          hour="16"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="5 PM"
          hour="17"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="6 PM"
          hour="18"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="7 PM"
          hour="19"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="8 PM"
          hour="20"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="9 PM"
          hour="21"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="10 PM"
          hour="22"
        />
        <TimeBlock
          event={time}
          setEvent={setEvents}
          block={block}
          setblockevent={setBlockEvent}
          time="11 PM"
          hour="23"
        />
      </Container>
    </>
  );
};

export default CalendarBlock;
