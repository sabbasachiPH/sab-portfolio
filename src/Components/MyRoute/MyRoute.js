import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Project";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import NotFound from "../Home/NotFound";

const MyRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default MyRoute;
