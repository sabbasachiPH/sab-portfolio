import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="navbar" class="nav">
      <h4 className="owner" style={{ color: "#fff" }}>
        Sabbasachi
      </h4>
      <ul class="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
