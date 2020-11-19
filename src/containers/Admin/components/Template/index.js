import React, { Component } from "react";
import Sidebar from "../Sidebar";

export default class AdminTemplate extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="w-25">
          <Sidebar />
        </div>
        <div className="w-75">{this.props.children}</div>
      </div>
    );
  }
}
