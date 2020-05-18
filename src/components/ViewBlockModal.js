import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import { Modal, Button } from "react-bootstrap";
import firebase from "../Firebase";

const ViewBlockModal = (props) => {
  // default db Firestore
  const db = firebase.firestore();

  // firebase collections
  let eventAdd = db.collection("events").doc("event");

  // calendar context
  let context = useContext(CalendarContext);

  // input styles for modal
  const inputStyle = {
    border: "1px solid lightgray",
    borderRadius: "10px",
    margin: "5px",
    paddingLeft: "5px",
  };

  return (
    <Modal
      show={context[7]}
      onHide={context[9]}
      //   style={{ backgroundColor: "whitesmoke", opacity: ".1" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h1>{context[10]["title"]}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p
          style={{
            border: "1px solid lightgray",
            borderRadius: "5px",
            padding: "5px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            width: "100px",
          }}
        >
          {context[10]["time"]}
        </p>
        <p>{context[10]["description"]}</p>
      </Modal.Body>
      <Modal.Footer
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Button
          variant="danger"
          style={{
            borderRadius: "5px",
          }}
          onClick={() => {
            context[10]();
          }}
        >
          Delete
        </Button>
        <Button variant="outline-warning">Edit</Button>
        <Button variant="secondary" onClick={context[9]}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewBlockModal;
