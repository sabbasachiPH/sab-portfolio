import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>
        <marquee>About Me</marquee>
      </h2>

      <section className="intro">
        <img src={require("../Welcome/picSabbasachi.jpg")} alt="" srcset="" />
        <aside>
          <p>
            Hi, I am sabbasachi Saha, I am a Enthusiastic web developer seeking
            an opportunity to sharpen web development skills with a view to
            become an expert in the web industry.
          </p>
          <p>
            I have completed my graduation and masters in statistics from
            university of dhaka. Now I am working as a senior officer in Janata
            Bank Limited.
          </p>
          <p>
            <strong>My Technical Skills Are :</strong>
          </p>
          <ul>
            <li>JavaScript</li>
            <li>Reactjs</li>
            <li>Expressjs</li>
            <li>Nodejs</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>Firebase</li>
          </ul>
          <p>
            To Know more feel free to see{" "}
            <a
              className="btn btn-primary"
              href={require("../Welcome/2.CV_WebDeveloper.pdf")}
              download="sabbasachi CV"
            >
              My Resume
            </a>
          </p>
        </aside>
      </section>
    </div>
  );
};

export default About;
