import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={data.hinhAnh} alt={data.tenPhim} />
        <div className="card-body">
          <h4 className="card-title">{data.tenPhim}</h4>
          <p className="card-text">{data.moTa}</p>
          <button
            className="btn btn-success"
            onClick={() => this.props.history.push(`/movie/${data.maPhim}`)}
          >
            Chi tiết
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
