import React from "react";

const Welcome = () => {
  return (
    <section id="welcome-section" class="welcome-section">
      <img
        style={{ height: "200", width: "200px", borderRadius: "50%" }}
        src={require("./picSabbasachi.jpg")}
        alt="sabbasachi"
      />
      <h1>Hey I'm Sabbasachi </h1>
      <h3>Web Developer</h3>
      <a
        className="btn btn-primary"
        href="./2.CV_WebDeveloper.pdf"
        download="sabbasachi CV"
      >
        My Resume
      </a>
    </section>
  );
};

const photo = {};

export default Welcome;
