import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import { signupReducer } from '../reducers/signupReducer'
import loginReducer from '../reducers/loginReducer'
import verifyReducer from '../reducers/VerifyMail'

const rootReducer = combineReducers({
    verifyReducer,
    loginReducer,
    signupReducer,
    toastr: toastrReducer,
});

export default rootReducer;