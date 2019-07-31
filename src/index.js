import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from "shards-react";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "shards-ui/dist/css/shards.min.css";
import MediaQuery from "react-responsive";
import "./index.css";

import NavBar from "./Web/components/NavBar";
import MainPage from "./Web/pages/MainPage";
import ContactMe from "./Web/pages/ContactMe";
import MyWork from "./Web/pages/MyWork";
import AboutMe from "./Web/pages/AboutMe";
import Blog from "./Web/pages/Blog";

import NavBarM from "./Mobile/components/NavBar";
import MainPageM from "./Mobile/pages/MainPage";
import ContactMeM from "./Mobile/pages/ContactMe";
import MyWorkM from "./Mobile/pages/MyWork";
import AboutMeM from "./Mobile/pages/AboutMe";
import BlogM from "./Mobile/pages/Blog";

const routing = (
  <div>
    <MediaQuery query="(min-device-width: 768px)" orientation="landscape">
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
    <MediaQuery query="(max-device-width: 768px)">
      <Router>
        <NavBarM />
        <Switch>
          <Route exact path="/" component={MainPageM} />
          <Route path="/contactme" component={ContactMeM} />
          <Route path="/mywork" component={MyWorkM} />
          <Route path="/aboutme" component={AboutMeM} />
          <Route path="/blog" component={BlogM} />
        </Switch>
      </Router>
    </MediaQuery>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
