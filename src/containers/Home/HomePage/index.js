import React, { Component } from "react";
import MovieList from "../components/MovieList";

export default class HomePage extends Component {
  // goToAbout = () => {
  //   // Đối tượng history giúp điều hướng trong component
  //   // this.props.history.push("/about");
  //   this.props.history.replace("/about");
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h1>Home Page</h1> */}
        {/* <button onClick={this.goToAbout}>Go to About page</button> */}
        <MovieList />
      </div>
    );
  }
}
