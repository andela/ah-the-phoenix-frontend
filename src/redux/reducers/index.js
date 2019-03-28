import { combineReducers } from "redux";
import { signupReducer } from "../reducers/signupReducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import loginReducer from "../reducers/loginReducer";
import verifyReducer from "../reducers/VerifyMail";
import { resetReducer } from "./resetReducer";
import { pwdUpdateReducer } from "./pwdUpdateReducer";
import profileReducer from "./profileReducer";
import { bookmarkArticleReducer } from "./bookmarkArticleReducer";
import articlesReducer from "./articlesReducer";
import ratingsReducer from "./ratingsReducer";
import likeDislikeReducer from '../reducers/LikeDislike'


const rootReducer = combineReducers({
  verifyReducer,
  loginReducer,
  signupReducer,
  resetReducer,
  pwdUpdateReducer,
  profileReducer,
  articlesReducer,
  bookmarkArticleReducer,
  ratingsReducer,
  likeDislikeReducer,
  toastr: toastrReducer,
});

export default rootReducer;
