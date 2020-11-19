import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Link to="/admin/movies">Movies</Link>
        <Link to="/admin/users">Users</Link>
      </div>
    );
  }
}
