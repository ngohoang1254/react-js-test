import React, { Component } from "react";
import { actFectAddUser } from "./modules/actions.js";
import { connect } from "react-redux";
 class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    }
  }
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 ">
            <form className="container" onSubmit={this.handleOnSubmit} >
              <h3>Thêm người dùng</h3>
              <div className="form-group">
                <span>Tài khoản</span>
                <input className="form-control" name="taiKhoan" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <span>Mật khẩu</span>
                <input className="form-control" name="matKhau" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <span>Họ tên</span>
                <input className="form-control" name="hoTen" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <span>Email</span>
                <input className="form-control" name="email" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <span>Số điện thoại</span>
                <input className="form-control" name="soDt" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <span>Mã nhóm</span>
                <input className="form-control" name="maNhom" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <span>Mã loại người dùng</span>
                <input className="form-control" name="maLoaiNguoiDung" onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">Thêm người dùng</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(actFectAddUser(user));
    }
  }
}
export default connect(null,mapDispatchToProps)(Users);

