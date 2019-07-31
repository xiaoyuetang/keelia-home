import React, { Component } from "react";
import tn from "../../images/tn.png";
class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="TnMain">
          <h3 className="Heading1">CALL ME BY YOUR</h3>
          <h1 className="Heading1">NAME</h1>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
