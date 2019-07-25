import React, { Component } from "react";
import MessageBoard from "../components/MessageBoard";

class ContactMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MessageBoard />
      </div>
    );
  }
}

export default ContactMe;
