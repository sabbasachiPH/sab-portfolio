import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Welcome from "./Components/Welcome/Welcome";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <Project />
      <Contact />
    </>
  );
}

export default App;
