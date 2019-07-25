import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from "shards-react";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "shards-ui/dist/css/shards.min.css";
import MediaQuery from "react-responsive";
import "./index.css";

import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";

const routing = (
  <MediaQuery query="(min-device-width: 1224px)" orientation="landscape">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/mywork" component={MyWork} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  </MediaQuery>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
