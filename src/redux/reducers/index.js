import { combineReducers } from 'redux';
import { signupReducer } from '../reducers/signupReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import loginReducer from '../reducers/loginReducer'
import verifyReducer from '../reducers/VerifyMail'
import { resetReducer } from './resetReducer';
import { pwdUpdateReducer } from './pwdUpdateReducer';
import profileReducer from './profileReducer';
import { listArticlesReducer } from "../reducers/listArticlesReducer";
import { getArticleReducer } from "../reducers/getArticleReducer";

const rootReducer = combineReducers({
    verifyReducer,
    loginReducer,
    signupReducer,
    resetReducer,
    pwdUpdateReducer,
    profileReducer,
    listArticlesReducer,
    getArticleReducer,
    toastr: toastrReducer,
});

export default rootReducer;
