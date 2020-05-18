import React, { useContext } from "react";
import { CalendarContext } from "../CalendarContext";
import { Modal, Button } from "react-bootstrap";
import firebase from "../Firebase";

const AddBlockModal = (props) => {
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
    <Modal show={context[0]} onHide={context[1]}>
      <Modal.Header closeButton>
        <Modal.Title>
          <input
            style={{
              border: "1px solid lightgray",
              borderRadius: "10px",
              margin: "5px",
              paddingLeft: "5px",
              width: "90%",
            }}
            type="text"
            placeholder="Add Title"
            onChange={(e) => {
              context[3]({ ...context[2], title: e.target.value });
            }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <span>Time</span>
          <input
            style={inputStyle}
            type="time"
            onChange={(e) => {
              context[3]({ ...context[2], time: e.target.value });
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
              context[3]({
                ...context[2],
                description: e.target.value,
              });
            }}
          />
          <br />
          <br />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={context[1]}>
          Close
        </Button>
        <Button
          style={{
            backgroundColor: "#32dba3",
            borderColor: "#32dba3",
            borderRadius: "5px",
          }}
          onClick={() => {
            // Set block to correct timeblock depending on time
            let timeBlockFromDynamicTime = `${context[2].time[0]}${context[2].time[1]}`;
            let dynamicTime = parseInt(timeBlockFromDynamicTime);
            let dynamicTimeToString = dynamicTime.toString();
            let blockTime = "";
            if (dynamicTime >= 12) {
              if (dynamicTimeToString === "12") {
                console.log(`${dynamicTimeToString} PM`);
                blockTime = `${dynamicTimeToString} PM`;
              } else {
                console.log(`${dynamicTime - 12} PM`);
                blockTime = `${dynamicTime - 12} PM`;
              }
            } else {
              if (dynamicTimeToString === "0") {
                console.log("12 AM");
                blockTime = "12 AM";
              } else {
                console.log(`${dynamicTimeToString} AM`);
                blockTime = `${dynamicTimeToString} AM`;
              }
            }

            // create new object from state for concatenation
            const newEventObj = {
              [context[2].title]: [
                context[2].description,
                context[2].time,
                blockTime,
              ],
            };

            eventAdd
              .get()
              .then((doc) => {
                if (!doc.exists) {
                  console.log("No such document!");
                } else {
                  let myEvents = [];
                  for (var x in doc.data()) {
                    myEvents.push(doc.data()[x]);
                  }
                  db.collection("events")
                    .doc("event")
                    .set(Object.assign({}, myEvents.concat(newEventObj)));
                  context[3]({
                    ...context[2],
                    saveCount: context[2].saveCount + 1,
                  });
                }
              })
              .catch((err) => {
                console.log("Error getting document", err);
              });

            // Close Modal
            context[1]();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBlockModal;
