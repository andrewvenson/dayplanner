import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import CalendarBlock from "./components/CalendarBlock";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Container>
        <Nav />
        <CalendarBlock />
      </Container>
    </div>
  );
}

export default App;
