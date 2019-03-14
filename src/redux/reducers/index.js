import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import { signupReducer } from '../reducers/signupReducer'
import loginReducer from '../reducers/loginReducer'
import verifyReducer from '../reducers/VerifyMail'
import { resetReducer } from './resetReducer';
import { pwdUpdateReducer } from './pwdUpdateReducer';

const rootReducer = combineReducers({
    verifyReducer,
    loginReducer,
    signupReducer,
    resetReducer,
    pwdUpdateReducer,
    toastr: toastrReducer,
});

export default rootReducer;
