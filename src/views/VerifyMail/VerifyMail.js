import React, { Component } from 'react'
import Loader from '../../components/Loader/Loader'
import { connect } from 'react-redux'
import verifyFunction from '../../redux/actioncreators/VerifyMail'
import { Card, Divider, Button } from 'semantic-ui-react'
import './VerifyMail.scss'

class VerifyMail extends Component {
    componentDidMount() {
        const { verifyFunction } = this.props
        verifyFunction();
    }
    render() {

        if (this.props.isFetching) {
            return (
                <div>
                    <Loader />
                </div>
            )
        }
        const { error } = this.props;

        if (error) {
            return (
                <div>
                    <Card className="verify-card">
                        <Card.Content>
                            <Card.Header>User mail verification</Card.Header>
                            <Divider />
                            <br></br>
                            <Card.Description><h5>{error.error.error ? error.error.error : error.error.message}</h5></Card.Description>
                            <br></br>
                            <Button onClick={() => this.props.history.push("/login")} positive>Click here to login</Button>
                        </Card.Content>
                    </Card>
                </div>
            )
        }
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.verifyReducer.isFetching,
        error: state.verifyReducer
    }
}
export default connect(mapStateToProps, { verifyFunction })(VerifyMail)
