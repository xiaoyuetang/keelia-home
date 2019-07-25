import React, { Component } from "react";
import { Badge } from "shards-react";
// import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

class FootBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Foot">
        <Badge pill theme="secondary">
          FIND ME IN INS
        </Badge>
      </div>
    );
  }
}

export default FootBar;
