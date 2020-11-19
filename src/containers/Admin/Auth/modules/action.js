import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED } from "./constant";
import Axios from "axios";

export const actFetchAuth = (user,history) => {
  /**
   * Goi API
   */
  return (dispatch) => {
    dispatch(actAuthRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actAuthSuccess(result.data));
        // Chuyển hướng tới trang admin/user
        if(result.data.maLoaiNguoiDung === "QuanTri"){
          //Lưu trạng thái xuống Local
          localStorage.setItem("userAdmin",JSON.stringify(result.data));
          
          // localStorage.getItem("userAdmin",JSON.parse("userAdmin"))
           // Chuyển hướng tới trang admin/user
          history.push("/admin/users");
            
        }
        else{
          alert("Không có quyền truy cập");
        }
      })
      .catch((err) => {
        dispatch(actAuthFailed(err));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: AUTH_FAILED,
    payload: err,
  };
};
