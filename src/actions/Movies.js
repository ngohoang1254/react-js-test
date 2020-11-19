import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "../constants/Movies";
import axios from "axios";

export const getMovies = () => {
  // Nhờ redux-thunk ở đây ta có thể return về 1 func
  // func này có 2 tham số
  // dispatch dùng để dispatch 1 action khác
  // getState dùng để lấy dữ liệu từ redux store
  return (dispatch, getState) => {
    // Trước khi gọi API dispatch action request
    // để set loading thành true
    dispatch({
      type: GET_MOVIES_REQUEST,
    });
    // Gọi API
    const url =
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
    axios
      .get(url)
      .then((result) => {
        // GỌI API thành công
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: result.data,
        });
      })
      .catch((error) => {
        // GỌI API thất bại
        dispatch({
          type: GET_MOVIES_FAIL,
          payload: error.message,
        });
      });
  };
};

// export const getMovies = (data) => {
//   return {
//     type: GET_MOVIES,
//     payload: data,
//   };
// };
