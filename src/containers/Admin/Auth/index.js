import React, { Component } from "react";
import { actFetchAuth } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  hanldeOnchange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handlLogin = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.fetchLogin(this.state,this.props.history);
  };

  renderNoti = () => {
    const { err } = this.props;
 
    if (err) {
    return <div className="alert alert-danger">{err.message}</div>;
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <form onSubmit={this.handlLogin}>
              {this.renderNoti()}
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={this.hanldeOnchange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    data: state.authReducer.data,
    err: state.authReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (user,history) => {
      dispatch(actFetchAuth(user,history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
