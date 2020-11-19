import {
  MOVIE_DETAIL_REQUEST,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_FAILED,
} from "./constant";
import Axios from "axios";

export const actFetchMovieDetail = (id) => {
  /**
   * Gọi api trong này
   */
  return (dispatch) => {
    dispatch(actMovieDetailRequest());
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    Axios.get(url)
      .then((result) => {
        dispatch(actMovieDetailSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actMovieDetailFailed(err));
      });
  };
};

const actMovieDetailRequest = () => {
  return {
    type: MOVIE_DETAIL_REQUEST,
  };
};

const actMovieDetailSuccess = (data) => {
  return {
    type: MOVIE_DETAIL_SUCCESS,
    payload: data,
  };
};

const actMovieDetailFailed = (err) => {
  return {
    type: MOVIE_DETAIL_FAILED,
    payload: err,
  };
};
