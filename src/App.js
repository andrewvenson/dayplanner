import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CalendarBlock from "./components/CalendarBlock";
import Nav from "./components/Nav";
import firebase from "./Firebase";
import { CalendarProvider } from "./CalendarContext";

function App() {
  const [time, setEvents] = useState([]);

  const [block, setBlockEvent] = useState({
    title: "",
    description: "",
    time: "",
    timeblk: "",
    current: "",
  });

  // modal consts to chang modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    const date = new Date();

    let currentTime = date.getHours();
    let currentTimeToString = currentTime.toString();

    setBlockEvent({ ...block, current: currentTimeToString });
  }, []);

  return (
    <CalendarProvider
      value={[
        show,
        handleClose,
        block,
        setBlockEvent,
        handleShow,
        time,
        setEvents,
      ]}
    >
      <Container>
        <Nav />
        <CalendarBlock />
      </Container>
    </CalendarProvider>
  );
}

export default App;
