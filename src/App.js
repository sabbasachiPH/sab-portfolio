import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./Components/Nav/Nav";
import MyRoute from "./Components/MyRoute/MyRoute";
import { BrowserRouter as Router } from "react-router-dom";
import Nav2 from "./Components/Nav/Nav2";

function App() {
  return (
    <>
      <Router>
        <Nav2 />
        {/* <Nav /> */}
        <MyRoute />
      </Router>
    </>
  );
}

export default App;
