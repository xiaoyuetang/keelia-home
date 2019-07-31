import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormInput,
  FormGroup,
  Button,
  FormTextarea,
  Modal,
  ModalBody,
  ModalHeader,
  ListGroup,
  ListGroupItemHeading,
  Col,
  Row,
  Container
} from "shards-react";
import axios from "axios";
import MessageBox from "./MessageBox";

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: "",
      message: "",
      messages: [],
      time: new Date()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.myDivToFocus = React.createRef();
  }
  componentDidMount() {
    axios
      .get("https://keelia-home-backend.herokuapp.com/todos/")
      .then(response => {
        this.setState({ messages: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  toggleModal(event) {
    this.setState({ open: !this.state.open });
    axios
      .get("https://keelia-home-backend.herokuapp.com/todos/")
      .then(response => {
        this.setState({ messages: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    //.current is verification that your element has rendered
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("submitted!");
    console.log(`name: ${this.state.name}`);
    console.log(`message: ${this.state.message}`);
    console.log(`message: ${this.state.time}`);

    const newMessage = {
      name: this.state.name,
      message: this.state.message,
      time: this.state.time
    };

    axios
      .post("https://keelia-home-backend.herokuapp.com/todos/add", newMessage)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      message: "",
      time: new Date()
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <Container>
        <div className="ContactForm">
          <Form onSubmit={this.handleSubmit}>
            <h3 className="Heading1">Contact Form</h3>
            <FormGroup>
              <label htmlFor="#username">Who are you 🤔</label>
              <FormInput
                id="username"
                name="name"
                placeholder="Your Name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Leave me a message here!</label>
              <FormTextarea
                calssName="MessageMe"
                name="message"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button type="submit" theme="secondary" onClick={this.toggleModal}>
              Submit
            </Button>
          </Form>
          <Modal open={this.state.open} toggle={this.toggleModal}>
            <ModalHeader>👋 Hello there!</ModalHeader>
            <ModalBody>You have just sent me a message!</ModalBody>
          </Modal>
        </div>
        <div className="MessageBoard" ref={this.myDivToFocus}>
          <h3 className="Heading1">Message Board</h3>
          <div className="ScrollableBox">
            {this.state.messages.map(messages => {
              return <MessageBox messages={messages} />;
            })}
          </div>
        </div>
      </Container>
    );
  }
}

export default MessageBoard;
