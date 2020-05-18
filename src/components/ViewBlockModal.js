import React, { useContext, useState } from "react";
import { CalendarContext } from "../CalendarContext";
import { Modal, Button } from "react-bootstrap";
import firebase from "../Firebase";

const ViewBlockModal = (props) => {
  // default db Firestore
  const db = firebase.firestore();

  // firebase collections
  let eventAdd = db.collection("events").doc("event");

  // delete button validation
  const [deletion, setDeletion] = useState({
    delete: false,
  });

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
    <Modal show={context[7]} onHide={context[9]}>
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
        <div
          style={{
            display: deletion.delete ? "block" : "none",
            border: "1px solid lightgray",
            borderRadius: "10px",
          }}
        >
          <p
            style={{ color: "gray", display: "flex", justifyContent: "center" }}
          >
            Are you sure you want to delete?
          </p>
          <span style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outline-danger"
              style={{ margin: "5px" }}
              onClick={() => {
                console.log(
                  context[5].filter(
                    (title) => title !== context[10]["titleobject"]
                  )
                );

                // set firestore to new object with removed item
                db.collection("events")
                  .doc("event")
                  .set(
                    Object.assign(
                      {},
                      context[5].filter(
                        (title) => title !== context[10]["titleobject"]
                      )
                    )
                  );
                // change savecount state for update of calendar block
                context[3]({
                  ...context[2],
                  saveCount: context[2].saveCount + 1,
                });
                // Close modal
                context[9]();
              }}
            >
              Yes
            </Button>
            <Button
              variant="outline-secondary"
              style={{ margin: "5px" }}
              onClick={() => {
                setDeletion({ ...deletion, delete: false });
              }}
            >
              No
            </Button>
          </span>
        </div>
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
            // show delete validation
            setDeletion({ ...deletion, delete: true });
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
