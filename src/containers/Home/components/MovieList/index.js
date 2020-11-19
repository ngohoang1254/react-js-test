import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import MovieItem from "../MovieItem";
import { getMovies } from "../../../../actions/Movies";

class MovieList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movieList: [],
  //   };
  // }
  componentDidMount() {
    // const url =
    //   "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";

    // axios.get(url).then((result) => {
    //   console.log(result);
    //   // this.setState({ movieList: result.data });
    //   this.props.getMovies(result.data);
    // });

    this.props.getMovies();
  }
  render() {
    const { movieList, loading, error } = this.props;

    if (error) {
      // TODO: <ErrorMessage />
      return <p>{error || "Something went wrong"}</p>;
    }

    if (loading) {
      // TODO: <Loading />
      return <p>Loading...</p>;
    }

    return (
      <div className="container">
        <div className="row">
          {movieList.map((item) => (
            <div className="col-sm-3">
              <MovieItem data={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.moviesReducer.movieList,
    loading: state.moviesReducer.loading,
    error: state.moviesReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (data) => {
      // const action = {
      //   type: "GET_MOVIES",
      //   payload: data
      // }
      dispatch(getMovies(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
