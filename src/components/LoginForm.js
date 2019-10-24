import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Username:{" "}
            <input type="text" name="username" value="this.props.userInfo.username" />
          </label>
          <label>
            Password:{" "}
            <input type="password" name="password" value="this.props.userInfo.password" />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        {/* <p>Forget your password?</p> */}
      </div>
    );
  }
}