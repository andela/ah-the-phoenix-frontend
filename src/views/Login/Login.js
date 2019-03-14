import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthForm from '../../components/AuthForm/AuthForm';
import './Login.scss';
import Loader from '../../components/Loader/Loader';


export class Login extends Component {
    render() {
        const { isFetching, loginSuccess, token } = this.props;
        if (loginSuccess === true) {
            localStorage.setItem('token', token)
            return <Redirect to="/" />
        }
        if (isFetching === true) {
            return (
                <div>
                    <Loader />
                </div>
            )
        }
        return (
            <div className="auth-form">
                <AuthForm authaction='login' />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.loginReducer.isFetching,
        loginSuccess: state.loginReducer.loginSuccess,
        token: state.loginReducer.token
    }
}

export default connect(mapStateToProps)(Login)
