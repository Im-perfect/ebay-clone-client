import React from "react";
import {Link} from "react-router-dom"

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1><Link to='/'>E-bay</Link></h1>
        <div>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/signup'><button>Sign Up</button></Link>
        </div>
        <hr />
      </div>
    );
  }
}
