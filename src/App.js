import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CalendarBlock from "./components/CalendarBlock";
import Nav from "./components/Nav";
import firebase from "./Firebase";
import { CalendarProvider } from "./CalendarContext";

function App() {
  // all events/times
  const [time, setEvents] = useState([]);

  // current hour block selected
  const [block, setBlockEvent] = useState({
    title: "",
    description: "",
    time: "",
    timeblk: "",
    current: "",
    saveCount: 0,
  });

  // selected button on hour block state
  const [selbutton, setSelButton] = useState({
    title: "",
    description: "",
    time: "",
    timeblk: "",
    titleobject: null,
    event: time,
  });

  // modal consts to chang add modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // View Block Modal state
  const [showaddmodal, setShowAddModal] = useState(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  const db = firebase.firestore();

  let event = db.collection("events").doc("event");

  useEffect(() => {
    event
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          let myEvents = [];
          for (var x in doc.data()) {
            myEvents.push(doc.data()[x]);
          }
          setEvents(myEvents);
        }
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
    // get data once modal is saved
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.saveCount]);

  useEffect(() => {
    const date = new Date();

    let currentTime = date.getHours();
    let currentTimeToString = currentTime.toString();

    setBlockEvent({ ...block, current: currentTimeToString });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        showaddmodal,
        handleAddShow,
        handleAddClose,
        selbutton,
        setSelButton,
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
