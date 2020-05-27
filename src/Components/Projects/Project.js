import React, { useState } from "react";

const allProjects = [
  {
    title: "Project-1",
    siteLink: "https://codepen.io/sabbasachi-saha/pen/gZGOEr",
    siteImg:
      "https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png",
  },
  {
    title: "Project-2",
    siteLink: "https://codepen.io/sabbasachi-saha/pen/gZGOEr",
    siteImg:
      "https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png",
  },
  {
    title: "Project-3",
    siteLink: "https://codepen.io/sabbasachi-saha/pen/gZGOEr",
    siteImg:
      "https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png",
  },
  {
    title: "Project-4",
    siteLink: "https://codepen.io/sabbasachi-saha/pen/gZGOEr",
    siteImg:
      "https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png",
  },
];

const Project = () => {
  const [projects, setProjects] = useState(allProjects);
  return (
    <>
      <section id="projects" className="project-section">
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
      </section>
    </>
  );
};

export default Project;
