import React, {Component} from 'react'
import {
    Button,
    Form,
    Message,
    Header,
    Segment
} from 'semantic-ui-react'
import passwordReset from "../../redux/actioncreators/passwordResetActions";
import { connect } from 'react-redux'

class ResetForm extends Component {
    state = {
        email: "",
        formState: "",
        formError: {header: "", message: ""},
        formSuccess: {header: "", message: ""}
    }

    onChange = e => {
        this.setState({
        [e.target.name]: e.target.value, 
        formState: "",
        formError: {header: "", message: ""}
        })
    }

    onBlur = e => {
        const { email } = this.state
        const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!emailValid && email.length > 0){
            this.setState({formState: "error", formError: {header: "Invalid Email format", message: "Please enter a valid email"}})
        }
    }

    onFocus = () => {
        this.setState({formState: "", formError: {header: "", message: ""}})
    }

    onSubmit = e => {
        const { email } = this.state
        this.props.passwordReset(email)
    }

    render() {
        const { formState, formSuccess, formError } = this.state;
        return (
            <Segment color="teal">
                <Form className={this.props.fetching ? "loading": formState} onSubmit={this.onSubmit}>
                    <Header textAlign="center" as='h3'><br/>Reset Password</Header>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Email'
                        name="email"
                        placeholder='Email'
                        required
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onChange={this.onChange}/>
                    <Message
                        error
                        header={formError.header}
                        content={formError.message} />
                    <Message
                        success
                        header={formSuccess.header}
                        content={formSuccess.message} />
                    <Button type="submit" disabled={formState === "error"? true: false} content="Send Link" primary/>
                    <br/>
                </Form>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.resetReducer.fetching
    }
}

export default connect(mapStateToProps, { passwordReset })(ResetForm);