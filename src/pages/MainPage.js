import React, { Component } from "react";
import tn from "../images/tn.png";
import Thumbnail from "../components/Thumbnail";
import Hello from "../components/Hello";
import FootBar from "../components/FootBar";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Thumbnail />
        <Hello />
        <FootBar />
      </div>
    );
  }
}

export default MainPage;
