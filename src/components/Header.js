import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            <Link to="/">E-bay</Link>
          </h1>
          {this.props.loggedIn ? (
            <p>Logged in as <strong>{this.props.user.toUpperCase()}</strong></p>
          ) : (
            <div>
              <Link to="/login">
                <button className="button-primary">Login</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </div>
          )}
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth,
    user: state.user
  };
};

export default connect(mapStateToProps)(Header);
