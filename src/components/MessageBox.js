import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroupItem,
  Badge,
  ListGroupItemHeading,
  Tooltip,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Fade
} from "shards-react";
import { Alert, Toast } from "react-bootstrap";
import axios from "axios";
import Moment from "react-moment";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, openM: false, showA: true };

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  toggleTooltip() {
    this.setState({
      open: !this.state.open
    });
  }

  handleDelete(e) {
    this.setState({
      openM: !this.state.openM,
      showA: false
    });
    axios
      .delete(
        "https://keelia-home-backend.herokuapp.com/todos/" +
          this.props.messages._id
      )
      .then(response => {
        // window.location.reload(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Toast
              className="MessageBox"
              show={this.state.showA}
              onClose={this.handleDelete}
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">{this.props.messages.name}:</strong>
                <small>
                  <Moment fromNow>{this.props.messages.time}</Moment>
                </small>
              </Toast.Header>
              <Toast.Body>{this.props.messages.message}</Toast.Body>
            </Toast>
          </Row>
        </Container>
        <Modal open={this.state.openM} toggle={this.handleDelete}>
          <ModalHeader>👋 Hello there!</ModalHeader>
          <ModalBody>Message has been successfully deleted!</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MessageBox;
