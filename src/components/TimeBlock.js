import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import firebase from "../Firebase";

const TimeBlock = (props) => {
  // modal consts
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // default Firestore
  const db = firebase.firestore();

  // button styles
  const event = {
    margin: "4px 2px 0px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    fontSize: "12px",
    boxShadow: "0px 2px 3px lightgray",
    zIndex: "999px",
  };

  // input styles for modal
  const inputStyle = {
    border: "1px solid lightgray",
    borderRadius: "10px",
    margin: "5px",
    paddingLeft: "5px",
  };

  return (
    <div
      className="timeBlock"
      style={{
        height: "50px",
        color: "gray",
        borderTop: "1px solid #ededed",
        marginBottom: "0px",
        cursor: "pointer",
      }}
    >
      <div
        style={{ display: "flex" }}
        onClick={() => {
          props.setblockevent({ ...props.block, timeblk: props.time });
          console.log(props.time);
          handleShow();
        }}
      >
        <p style={{ fontSize: "12px" }}>{props.time}</p>

        {props.event.map((title, index) => {
          if (props.time === title[Object.keys(title).toString()][2]) {
            return (
              <button
                key={index}
                style={event}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span>
                  {Object.keys(title).toString()} -{" "}
                  {title[Object.keys(title).toString()][1]}
                </span>
              </button>
            );
          }
        })}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              style={inputStyle}
              type="text"
              placeholder="Add Title"
              onChange={(e) => {
                props.setblockevent({ ...props.block, title: e.target.value });
              }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              style={inputStyle}
              type="time"
              onChange={(e) => {
                props.setblockevent({ ...props.block, time: e.target.value });
              }}
            />
            <br />
            <textarea
              style={{
                width: "300px",
                height: "100px",
                border: "1px solid lightgray",
                borderRadius: "10px",
                margin: "5px",
              }}
              // type="textarea"
              placeholder="Description"
              onChange={(e) => {
                props.setblockevent({
                  ...props.block,
                  description: e.target.value,
                });
              }}
            />
            <br />
            <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{
              backgroundColor: "#32dba3",
              borderColor: "#32dba3",
              borderRadius: "5px",
            }}
            onClick={() => {
              // Create new object from prop block object
              const newEventObj = {
                [props.block.title]: [
                  props.block.description,
                  props.block.time,
                  props.block.timeblk,
                ],
              };
              // concatenate newEvent object to current prop event array
              props.setEvent(props.event.concat(newEventObj));

              // Save to firestore
              db.collection("events")
                .doc("event")
                .set(Object.assign({}, props.event));

              // Close Modal
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TimeBlock;
