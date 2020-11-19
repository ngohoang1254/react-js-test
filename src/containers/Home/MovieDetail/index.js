import React, { Component } from "react";
import { actFetchMovieDetail } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";

class MovieDetail extends Component {
  componentDidMount() {
    // Lấy mã phim từ trên url
    const { id } = this.props.match.params;

    // Sau đó dùng mã phim gọi action lấy chi tiết phim
    this.props.fetchMovieDetail(id);
  }

  renderTable = () => {
    const { data } = this.props;
    if (data) {
      return data.lichChieu.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          </tr>
        );
      });
    }
  };

  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    console.log(data);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {data && <img src={data.hinhAnh} alt="" />}
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ten Phim</td>
                  <td>{data && data.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mo ta</td>
                  <td>{data && data.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Cum rap</th>
                  <th>Ten rap</th>
                  <th>Ngay chieu</th>
                  <th>Gio chieu</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.movieDetailReducer.loading,
    data: state.movieDetailReducer.data,
    err: state.movieDetailReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail: (id) => {
      dispatch(actFetchMovieDetail(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
