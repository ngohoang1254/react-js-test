import React, { Component } from "react";
import Header from "../Header";

export default class HomeTemplate extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    );
  }
}
