import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroupItem,
  Badge,
  ListGroupItemHeading
} from "shards-react";

class MessageBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ListGroupItem>
          <Container>
            <Row>
              <Badge theme="secondary">{this.props.messages.name}:</Badge>
              <Col>{this.props.messages.message}</Col>
            </Row>
          </Container>
        </ListGroupItem>
      </div>
    );
  }
}

export default MessageBox;
