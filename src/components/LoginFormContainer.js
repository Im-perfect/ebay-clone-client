import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default class LoginFormContainer extends React.Component {
  render() {
    return (
      <div>
          <LoginForm />
          <p>Forget your password?</p>
      </div>
    );
  }
}