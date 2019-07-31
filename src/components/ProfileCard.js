import React, { Component } from "react";
import { Image } from "react-bootstrap";
import icon from "../images/icon.png";

class ProfileCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Image src={icon} roundedCircle />
      </div>
    );
  }
}

export default ProfileCard;
