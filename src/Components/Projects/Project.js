import React, { useState } from "react";

const allProjects = [
  {
    title: "Red Onion Restaurant App",
    siteLink: "https://red-onion-mon.web.app/",
    siteImg: require("../../images/redonion.png"),
  },
  {
    title: "E-commerce Site",
    siteLink: "https://sab-ema-john-simple.web.app/",
    siteImg: require("../../images/emaJon.png"),
  },
  {
    title: "Appointment Booking System",
    siteLink: "https://doctors-portal-sab.web.app/",
    siteImg: require("../../images/doctorsportal.png"),
  },
  {
    title: "ToDo App",
    siteLink: "https://todo-app-traversy.netlify.app/",
    siteImg: require("../../images/todo.png"),
  },
  {
    title: "Pioneer Bank",
    siteLink: "https://sabbasachiph.github.io/pioneer-bank/",
    siteImg: require("../../images/pioneerBamk.png"),
  },
  {
    title: "Biography",
    siteLink: "https://codepen.io/sabbasachi-saha/pen/gZGOEr",
    siteImg:
      "https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png",
  },
];

const Project = () => {
  const [projects, setProjects] = useState(allProjects);

  const displayprojects = projects.map((project) => (
    // <div class="card " style={{ width: "20rem" }}>
    <div class="card ">
      <img src={project.siteImg} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{project.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href={project.siteLink} class="btn btn-secondary">
          See Detais
        </a>
      </div>
    </div>
  ));
  return (
    <>
      {/* <section id="projects" className="project-section">
        <u>
          <h2 className="project-title">These are some of my projects</h2>
        </u>
        <div className="projects">
          {projects.map((project) => (
            <div className="pro">
              <a
                href={project.siteLink}
                target="_blank"
                className="project project-tile"
              >
                <img
                  className="project-pic"
                  src={project.siteImg}
                  alt="project"
                />
              </a>
              <a
                href={project.siteLink}
                target="_blank"
                className="project project-tile"
              >
                <h3>{project.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </section> */}
      <h2 className="project-title">These are some of my projects</h2>
      <section id="projects" className="project-display">
        {displayprojects}
      </section>
    </>
  );
};

export default Project;
