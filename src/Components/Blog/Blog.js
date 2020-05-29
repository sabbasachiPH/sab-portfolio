import React from "react";

const allBlogs = [
  {
    title: "Javascript Interview Question and answer",
    siteLink:
      "https://medium.com/@sahasabbasachi/milestone-3-day-7-d3891fbf5316?source=friends_link&sk=d409e2f325f9fa3193f5f78d9545222d",
    siteImg: require("../Blog/blog (4).png"),
  },
  {
    title: "Common Problem Solving",
    siteLink:
      "https://medium.com/@sahasabbasachi/milestone-3-day-6-663a07335f87?source=friends_link&sk=6379f8ccdc52d03d00200c38e75ae9d4",
    siteImg: require("../Blog/blog (5).png"),
  },
  {
    title: "Important Reat Question",
    siteLink:
      "https://medium.com/@sahasabbasachi/milestone-3-day-4-7772557a994e",
    siteImg: require("../Blog/blog (3).jpg"),
  },
];

const Blog = () => {
  const displayblogs = allBlogs.map((blog) => (
    // <div class="card " style={{ width: "20rem" }}>
    <div class="card ">
      <img src={blog.siteImg} class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-title">{blog.title}</h3>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <a href={blog.siteLink} target="blank" class="btn btn-success">
        Read Full Article
      </a>
    </div>
  ));
  return (
    <div>
      <br></br>
      <h2>Welcome to My Blog</h2>
      {/* <h2 className="project-title">These are some of my projects</h2> */}
      <section id="projects" className="project-display">
        {displayblogs}
      </section>

      <p style={{ textAlign: "center" }}>
        <a
          className="btn btn-primary"
          href="https://medium.com/@sahasabbasachi"
        >
          Read All Blogs
        </a>
      </p>
    </div>
  );
};

export default Blog;
