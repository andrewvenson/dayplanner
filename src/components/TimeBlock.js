import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TimeBlock = (props) => {
  // modal consts
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // button styles
  const event = {
    margin: "4px 2px 0px 2px",
    borderRadius: "10px",
    border: "1px solid lightgray",
    fontSize: "12px",
    boxShadow: "0px 2px 3px lightgray",
    zIndex: "999px",
  };

  return (
    <div
      className="timeBlock"
      style={{
        height: "50px",
        color: "gray",
        borderTop: "1px solid #ededed",
        marginBottom: "0px",
      }}
    >
      <div
        style={{ display: "flex", cursor: "pointer" }}
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
              type="time"
              onChange={(e) => {
                props.setblockevent({ ...props.block, time: e.target.value });
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => {
                props.setblockevent({
                  ...props.block,
                  time: e.target.value,
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
            variant="primary"
            onClick={() => {
              // props.setevent({ event: event.push(props.block) });
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
