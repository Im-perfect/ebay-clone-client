import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default class SignupFormContainer extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.props.state)
  };

  render() {
    return (
      <div>
        <LoginForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          login={this.state}
        />
      </div>
    );
  }
}
