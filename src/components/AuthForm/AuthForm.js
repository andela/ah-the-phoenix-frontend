import React, { Component } from 'react';
import { Segment, Grid, Divider, Form, Button, Header, Message } from "semantic-ui-react";
import './AuthForm.scss';
import signupFunction from '../../redux/actioncreators/signupActions';
import { login } from '../../redux/actioncreators/loginActions';
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
import SocialAuth from '../../views/SocialAuth/SocialAuth'
import { makeValidations } from '../../helpers/SignupValidate'



class AuthForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    formState: { email: null, password: null, username: null, confirm_password: null },
    errors: null,
    emailErrors: { email: null },
    passwordErrors: { password: null },
    confirmErrors: { confirm_password: null },
    usernameErrors: { username: null }
  }
  handleLogin = (e) => {
    e.preventDefault()
    this.props.login({ "user": this.state })
  }

  handleSignup = (e) => {

    let payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    this.props.signupFunction(payload);
    e.target.reset();
  }


  handleChange = (e) => {
    if (e.target.name === "username" || e.target.name === "password" || e.target.name === "email") {
      let result = makeValidations(e.target.name, e.target.value);
      if (result.name === "username") {
        this.setState({
          ...this.state,
          username: result.val,
          formState: result.formState,
          errors: result.errors,
          usernameErrors: result.usernameErrors
        })
      }
      if (result.name === "email") {
        this.setState({
          ...this.state,
          email: result.val,
          formState: result.formState,
          errors: result.errors,
          emailErrors: result.emailErrors
        })
      }
      if (result.name === "password") {
        this.setState({
          ...this.state,
          password: result.val,
          formState: result.formState,
          errors: result.errors,
          passwordErrors: result.passwordErrors
        })
      }
    }
    if (e.target.name === "confirmpassword") {
      if (this.state.password !== e.target.value) {
        this.setState({
          formState: { confirm_password: true },
          errors: true, confirmErrors: {
            confirm_password: "Passwords do not match"
          }
        })
      }
      else {
        this.setState({
          [e.target.name]: e.target.value,
          errors: null, formState: { confirm_password: null },
          confirmErrors: { confirm_password: null }
        })
      }
    }
  }

  render() {
    const { authaction, isFetching, isFetchingLogin } = this.props;
    const loginForm = () => {
      return (
        <Form onSubmit={this.handleLogin} error>
          <Header textAlign="center" as='h3'><br />Login here</Header>
          <br></br>
          <Form.Input icon='user' iconPosition='left' label='Email' name="email" placeholder='Email' type="email" onChange={this.handleChange} error={this.state.formState.email} />
          <div>
            <Message
              error
              className="errors"
              content={this.state.emailErrors.email}
            />
          </div>
          <Form.Input icon='lock' iconPosition='left' label='Password' type='password' name="password" placeholder="Password" onChange={this.handleChange} error={this.state.formState.password} />
          <div>
            <Message
              error
              className="errors"
              content={this.state.passwordErrors.password}
            />
          </div>
          <Button fluid disabled={this.state.errors ? true : false} content='Login' type="submit" className="ui green button" onClick={this.handleLogin} />
          <br />
          <Form.Field>
            <a href="/reset-password" onClick={() => {
              window.location.replace('/reset-password')
            }}>Forgot Password?</a>
          </Form.Field>
        </Form>
      )
    }

    const signupForm = () => {

      return (
        <Form onSubmit={this.handleSignup} error>

          <Header textAlign="center" as='h3'><br />Signup here</Header>
          <br></br>
          <Form.Input icon='user' iconPosition='left' type="text" label='Username' name="username" placeholder='Username' onChange={this.handleChange} required error={this.state.formState.username} />

          <Message
            error
            className="errors"
            content={this.state.usernameErrors.username}
          />

          <Form.Input icon='user' iconPosition='left' label='Email' type="email" name="email" placeholder='Email' onChange={this.handleChange} required error={this.state.formState.email} />
          <div>

            <Message
              error
              className="errors"
              content={this.state.emailErrors.email}
            />

          </div>
          <Form.Input icon='lock' iconPosition='left' label='Password' type="password" name="password" placeholder='Password' onChange={this.handleChange} error={this.state.formState.password} required />
          <div>

            <Message
              error
              className="errors"
              content={this.state.passwordErrors.password}
            />
          </div>
          <Form.Input icon='lock' iconPosition='left' label='Confirm password' type="password" name="confirmpassword" placeholder='Confirm Password' onChange={this.handleChange} error={this.state.formState.confirm_password} required />
          <div>

            <Message
              error
              className="errors"
              content={this.state.confirmErrors.confirm_password}
            />

            <br></br>
          </div>
          <Button disabled={this.state.errors ? true : false} fluid content='Signup' type="submit" primary />
          <br />
        </Form>
      )
    }
    let form = null;
    if (authaction === 'login') {
      form = loginForm();
    } else if (authaction === 'signup') {
      form = signupForm();
    }

    if (isFetching === true || isFetchingLogin === true) {
      return (
        <div>
          <Loader />
        </div>
      )
    }

    return (

      <Segment placeholder className="auth-form-segment" color="teal">

        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column verticalAlign='middle'>
            <SocialAuth history={this.props.history} />

          </Grid.Column>
          <Grid.Column>
            {form}
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.signupReducer.isFetching,
    isFetchingLogin: state.loginReducer.isFetching
  }
}

export default connect(mapStateToProps, { login, signupFunction })(AuthForm)
