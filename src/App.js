import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header"
import AdListContainer from "./components/AdListContainer";
import SignupFormContainer from "./components/SignupContainer";
import LoginFormContainer from "./components/LoginFormContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header><Header /></header>
        <Route path="/" exact component={AdListContainer} />
        <Route path="/signup" exact component={SignupFormContainer} />
        <Route path="/login" exact component={LoginFormContainer} />
      </div>
    );
  }
}

export default App;
