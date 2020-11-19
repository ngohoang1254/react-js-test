import React, { Component } from "react";
import { Route } from "react-router-dom";

import Template from "./components/Template";

export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <Template>
        <Route
          exact={this.props.exact}
          path={this.props.path}
          component={this.props.component}
        />
      </Template>
    );
  }
}
