import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from "../constants/Movies";
const initialState = {
  movieList: [],
  loading: false,
  error: "",
};
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case GET_MOVIES_SUCCESS: {
      return { ...state, loading: false, movieList: action.payload };
    }
    case GET_MOVIES_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default moviesReducer;
