import React from "react";
// import { Link } from "react-router-dom";
import AdListContainer from "./AdListContainer";
import Header from "./Header";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AdListContainer />
      </div>
    );
  }
}
