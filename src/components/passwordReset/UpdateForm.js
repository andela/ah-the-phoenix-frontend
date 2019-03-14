import React, { Component } from 'react'
import {
    Button,
    Form,
    Message,
    Header,
    Segment
} from 'semantic-ui-react'
import passwordUpdate from "../../redux/actioncreators/passwordUpdateActions";
import { connect } from 'react-redux'

class PasswordUpdateForm extends Component {
    state = {
        password: "",
        confirmPassword: "",
        formState: "",
        formError: { header: "", message: "" },
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })

    }

    onBlur = e => {
        const { password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            this.setState({
                formState: "error",
                formError: { header: "", message: "passwords do not match" }
            })
        }
    }

    checkPasswordStrength = e => {
        const { password } = this.state
        if (password.length < 8) {
            this.setState({
                formState: "error",
                formError: { header: "password too shot", message: "please use a password with more than 8 characters" }
            })
        }
        if (password.length > 50) {
            this.setState({
                formState: "error",
                formError: { header: "password too long", message: "please use a password with less than 50 characters" }
            })
        }
        if (!password.match(/^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/)) {
            this.setState({
                formState: "error",
                formError: { header: "password too weak", message: "please use a password with an uppercase, lowercase and a special character" }
            })
        }
        else {
            this.setState({
                formState: "success",
                formError: { header: "", message: "" }
            })
        }
    }

    onSubmit = e => {
        const { password, confirmPassword } = this.state
        this.props.passwordUpdate(password, confirmPassword)
    }

    render() {
        const { redirect, fetching } = this.props
        if (redirect) {
            window.location.replace("/login")
        }
        const { formState, formError } = this.state;
        return (
            <Segment color="teal">
                <Form className={fetching ? "loading" : formState} onSubmit={this.onSubmit}>
                    <Header textAlign="center" as='h3'><br />Update Password</Header>
                    <Form.Input
                        icon="lock"
                        type="password"
                        iconPosition='left'
                        label='New Password'
                        name="password"
                        placeholder='New Password'
                        required
                        onChange={this.onChange}
                        onBlur={this.checkPasswordStrength}
                    />
                    <Form.Input
                        icon="lock"
                        type="password"
                        iconPosition='left'
                        label='Confirm Password'
                        name="confirmPassword"
                        placeholder='Confrim Password'
                        required
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                    />
                    <Message
                        error
                        header={formError.header}
                        content={formError.message} />
                    <Button type="submit" content="Update Password" disabled={formState === "error" ? true : false} primary />
                    <br />
                </Form>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.pwdUpdateReducer.fetching,
        redirect: state.pwdUpdateReducer.redirect
    }
}

export default connect(mapStateToProps, { passwordUpdate })(PasswordUpdateForm);