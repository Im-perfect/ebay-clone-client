import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { login } from "../actions/user";

class LoginFormContainer extends React.Component {
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
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    if (this.props.loggedIn) {
        return <Redirect to="/" />
    }
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

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
