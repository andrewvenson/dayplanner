import React from "react"
import { Modal, Button } from "react-bootstrap"
import firebase from "../Firebase";


const AddBlockModal = (props) => {

// default db Firestore
const db = firebase.firestore();

// firebase collections
let eventAdd = db.collection("events");

// input styles for modal
const inputStyle = {
    border: "1px solid lightgray",
    borderRadius: "10px",
    margin: "5px",
    paddingLeft: "5px",
};

return(
    <Modal show={props.show} onHide={props.handleClose}>
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
            <Button variant="secondary" onClick={props.handleClose}>
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

                // Set block to correct timeblock depending on time
                let timeBlockFromDynamicTime = `${props.block.time[0]}${props.block.time[1]}`;
                let dynamicTime = parseInt(timeBlockFromDynamicTime);
                let dynamicTimeToString = dynamicTime.toString();
                let blockTime = "";
                if (dynamicTimeToString.length === 2) {
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
                [props.block.title]: [
                    props.block.description,
                    props.block.time,
                    blockTime,
                ],
                };

                // concatenate newEvent object to current firebase object and then push to firebase
                eventAdd.get().then((snapshot) => {
                let myEvents = [];
                snapshot.forEach((doc) => {
                    if (doc.id === "event") {
                    for (var x in doc.data()) {
                        myEvents.push(doc.data()[x]);
                    }
                    }
                });
                db.collection("events")
                    .doc("event")
                    .set(Object.assign({}, myEvents.concat(newEventObj)));
                });

                // Close Modal
                props.handleClose();
            }}
            >
            Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
)}


export default AddBlockModal