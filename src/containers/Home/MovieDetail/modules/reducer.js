import {
  MOVIE_DETAIL_REQUEST,
  MOVIE_DETAIL_SUCCESS,
  MOVIE_DETAIL_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_DETAIL_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case MOVIE_DETAIL_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case MOVIE_DETAIL_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default movieDetailReducer;
