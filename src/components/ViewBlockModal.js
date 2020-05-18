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
  const [mutateevent, setMutation] = useState({
    delete: false,
    edit: false,
  });

  // calendar context
  let context = useContext(CalendarContext);

  // input styles for modal
  const inputStyle = {
    border: "1px solid orange",
    borderRadius: "10px",
    margin: "5px",
    paddingLeft: "5px",
  };

  return (
    <Modal
      show={context[7]}
      onHide={() => {
        setMutation({ ...mutateevent, edit: false });
        context[9]();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {mutateevent["edit"] ? (
            <input
              type="text"
              style={{
                border: "1px solid orange",
                borderRadius: "10px",
                margin: "5px",
                paddingLeft: "5px",
                width: "90%",
              }}
              value={context[10]["title"]}
              onChange={(e) => {
                context[11]({ ...context[10], title: e.target.value });
              }}
            />
          ) : (
            <h1>{context[10]["title"]}</h1>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mutateevent["edit"] ? (
          <>
            Time{" "}
            <input
              type="time"
              style={inputStyle}
              value={context[10]["time"]}
              onChange={(e) => {
                context[11]({ ...context[10], time: e.target.value });
              }}
            />
            <br />
          </>
        ) : (
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
        )}

        {/* Description */}
        {mutateevent["edit"] ? (
          <textarea
            style={{
              width: "300px",
              height: "100px",
              border: "1px solid orange",
              borderRadius: "10px",
              margin: "5px",
            }}
            type="text"
            value={context[10]["description"]}
            onChange={(e) => {
              context[11]({ ...context[10], description: e.target.value });
            }}
          />
        ) : (
          <p>{context[10]["description"]}</p>
        )}

        {/* delete validation */}
        <div style={{ display: mutateevent.edit ? "block" : "none" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outline-secondary"
              style={{ margin: "5px" }}
              onClick={() => {
                setMutation({ ...mutateevent, edit: false });
              }}
            >
              Discard
            </Button>

            <Button
              variant="outline-success"
              style={{ margin: "5px", width: "78.41px" }}
              onClick={() => {
                let timeBlockFromDynamicTime = `${context[10].time[0]}${context[10].time[1]}`;
                let dynamicTime = parseInt(timeBlockFromDynamicTime);
                let dynamicTimeToString = dynamicTime.toString();

                console.log(dynamicTimeToString);
                // let blockTime = "";
                // if (dynamicTime >= 12) {
                //   if (dynamicTimeToString === "12") {
                //     console.log(`${dynamicTimeToString} PM`);
                //     blockTime = `${dynamicTimeToString} PM`;
                //   } else {
                //     console.log(`${dynamicTime - 12} PM`);
                //     blockTime = `${dynamicTime - 12} PM`;
                //   }
                // } else {
                //   if (dynamicTimeToString === "0") {
                //     console.log("12 AM");
                //     blockTime = "12 AM";
                //   } else {
                //     console.log(`${dynamicTimeToString} AM`);
                //     blockTime = `${dynamicTimeToString} AM`;
                //   }
                // }

                // // create new object from state for concatenation
                // const newEventObj = {
                //   [context[2].title]: [
                //     context[2].description,
                //     context[2].time,
                //     blockTime,
                //   ],
                // };

                // eventAdd
                //   .get()
                //   .then((doc) => {
                //     if (!doc.exists) {
                //       console.log("No such document!");
                //     } else {
                //       let myEvents = [];
                //       for (var x in doc.data()) {
                //         myEvents.push(doc.data()[x]);
                //       }
                //       db.collection("events")
                //         .doc("event")
                //         .set(Object.assign({}, myEvents.concat(newEventObj)));
                //       context[3]({
                //         ...context[2],
                //         saveCount: context[2].saveCount + 1,
                //       });
                //     }
                //   })
                //   .catch((err) => {
                //     console.log("Error getting document", err);
                //   });
                context[9]();
              }}
            >
              Save
            </Button>
          </div>
        </div>
        <div
          style={{
            display: mutateevent.delete ? "block" : "none",
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
                setMutation({ ...mutateevent, edit: false });
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
                setMutation({ ...mutateevent, delete: false });
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
            // if editing is not true | disable delete functionality
            if (!mutateevent.edit) {
              setMutation({ ...mutateevent, delete: true });
            }
          }}
        >
          Delete
        </Button>
        <Button
          variant="outline-warning"
          onClick={() => {
            // Display editing
            setMutation({ ...mutateevent, edit: true });
          }}
        >
          Edit
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setMutation({ ...mutateevent, edit: false });
            context[9]();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewBlockModal;
