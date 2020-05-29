import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./Components/Nav/Nav";
import MyRoute from "./Components/MyRoute/MyRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <MyRoute />
      </Router>
    </>
  );
}

export default App;
