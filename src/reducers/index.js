import { combineReducers } from "redux";
import moviesReducer from "./Movies";
import movieDetailReducer from "./../containers/Home/MovieDetail/modules/reducer";
import authReducer from "./../containers/Admin/Auth/modules/reducer";
import userReducer from "../containers/Admin/Users/modules/reducers";
const rootReducer = combineReducers({
  moviesReducer, // moviesReducer: moviesReducer
  movieDetailReducer,
  authReducer,
  userReducer,
});

export default rootReducer;
