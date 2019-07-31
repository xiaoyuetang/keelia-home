import React, { Component } from "react";
import MessageBoard from "../components/MessageBoard";
import FootBar from "../components/FootBar";

class ContactMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MessageBoard />
        <hr />
        <FootBar />
      </div>
    );
  }
}

export default ContactMe;
