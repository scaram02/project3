import React, { Component } from "react";
import { referral } from "../services/auth";
import { Alert, Form, Button } from "react-bootstrap";
import './Signup.css'

class SignupFlatmate extends Component {
  state = {
    username: "",
    password: "",
    flatId: this.props.match.params.flatId,
    error: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    referral(this.state.username, this.state.password, this.state.flatId).then(
      data => {
        if (data.message) {
          // handle errors
          this.setState({
            error: data.message
          });
        } else {
          // no error
          // lift the data up to the App state
          console.log(data);
          this.props.setUser(data);
          this.props.history.push("/dashboard");
        }
      }
    );
  };

  componentDidMount = () => {
    console.log("Hallooooo");
    console.log(this.props.match.params.flatId);
  };

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username: </Form.Label>
            <Form.Control
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password: </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
          <Button className='signup-button' type="submit">Sign up</Button>
        </Form>
      </div>
    );
  }
}

export default SignupFlatmate;
