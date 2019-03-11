import React, { Component } from 'react';
import { Segment, Grid, Divider, Form, Button, Header, Message } from "semantic-ui-react";
import './AuthForm.scss';
import signupFunction from '../../redux/actioncreators/signupActions'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
import SocialAuth from '../../views/SocialAuth/SocialAuth'



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
    if (e.target.name === "username") {
      let user = e.target.value;
      let regex = /\d/g;
      if (user.length < 2) {
        this.setState({ ...this.state, errors: true, formState: { username: true }, usernameErrors: { username: "Username must be more than 2 characters" } })
      }
      else if (regex.test(user)) {
        this.setState({ ...this.state, errors: true, formState: { username: true }, usernameErrors: { username: "Username should not contain numbers" } })
      }
      else {
        this.setState({ [e.target.name]: e.target.value, errors: null, formState: { username: null }, usernameErrors: { username: null } })
      }
    }
    if (e.target.name === "email") {
      const regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      const emailValid = regex.test(String(e.target.value).toLowerCase())
      if (!emailValid) {
        this.setState({ ...this.state, formState: { email: true }, errors: true, emailErrors: { email: "Please enter a valid email" } })
      }
      else {
        this.setState({ [e.target.name]: e.target.value, errors: null, formState: { email: null }, emailErrors: { email: null } })
      }
    }
    if (e.target.name === "password") {
      let pass = e.target.value;
      if (pass.length < 8) {
        this.setState({
          formState: { password: true }, errors: true, passwordErrors: {
            password: "password cannot be less than 8 characters"
          }
        })
      }

      else if (pass.length > 50) {
        this.setState({
          formState: { password: true }, errors: true, passwordErrors: {
            password: "password cannot be greater than 50 characters"
          }
        })
      }
      else if (!pass.match(/^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/)) {
        this.setState({
          formState: { password: true }, errors: true, passwordErrors: {
            password: "please consider a password that has a number, an uppercase letter, lowercase letter and a special character"
          }
        })
      }
      else {
        this.setState({ [e.target.name]: e.target.value, errors: null, formState: { password: null }, passwordErrors: { password: null } })
      }
    }
    if (e.target.name === "confirmpassword") {
      console.log(this.state)
      if (this.state.password !== e.target.value) {
        this.setState({
          formState: { confirm_password: true }, errors: true, confirmErrors: {
            confirm_password: "Passwords do not match"
          }
        })
      }
      else {
        this.setState({ [e.target.name]: e.target.value, errors: null, formState: { confirm_password: null }, confirmErrors: { confirm_password: null } })
      }
    }

  }


  render() {
    const { authaction, isFetching } = this.props;
    const loginForm = () => {
      return (
        <div>
          <Form>
            <Header textAlign="center" as='h3'><br />Login here</Header>
            <br></br>
            <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username/Email' required />
            <Form.Input icon='lock' iconPosition='left' label='Password' placeholder='Password' type='password' required />

            <Button fluid content='Login' type="submit" primary />
            <br />

          </Form>
        </div>
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
    var form = null
    if (authaction === "login") {
      form = loginForm()
    }
    else if (authaction === "signup") {
      form = signupForm()
    }

    if (isFetching === true) {
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.signupReducer.isFetching
  }
}

export default connect(mapStateToProps, { signupFunction })(AuthForm)
