import React, { Component } from "react";
import { Button } from "react-bootstrap";

class FootBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Foot">
        <Button
          onClick={() =>
            window.open(
              "https://instagram.com/xiaoyuekeelia_?igshid=71d2hkqdi96w",
              "_blank"
            )
          }
          variant="outline-secondary"
        >
          FIND ME IN INS
        </Button>
      </div>
    );
  }
}

export default FootBar;
