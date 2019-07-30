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
import { Alert } from "react-bootstrap";
import axios from "axios";
import Moment from "react-moment";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, openM: false, visible: true };

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
      visible: false
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
            <Fade className="sMB" in={this.state.visible}>
              <Alert>
                <Alert.Heading>{this.props.messages.name}:</Alert.Heading>
                <p>{this.props.messages.message}</p>
                <hr />
                <p className="mb-0">
                  <Moment fromNow>{this.props.messages.time}</Moment>
                  <Button
                    theme="light"
                    size="sm"
                    id="delete"
                    onClick={this.handleDelete}
                    className="deleteBut"
                  >
                    ❌
                  </Button>
                </p>
              </Alert>
            </Fade>
          </Row>
        </Container>
        <Tooltip
          open={this.state.open}
          target="#delete"
          toggle={this.toggleTooltip}
        >
          😁 click here to delete
        </Tooltip>
        <Modal open={this.state.openM} toggle={this.handleDelete}>
          <ModalHeader>👋 Hello there!</ModalHeader>
          <ModalBody>Message has been successfully deleted!</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MessageBox;
