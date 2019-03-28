import React, { Component } from 'react'
import { connect } from "react-redux";
import { getSingleNotification } from '../../redux/actioncreators/getNotifications'
import Loader from '../Loader/Loader'
import './Notification.scss'

export class SingleNotification extends Component {
    componentDidMount() {
        this.props.getSingleNotification(this.props.match.params.id)
    }
    render() {
        const { isFetching } = this.props;
        if (isFetching) {
            return <Loader />
        }

        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.getNotificationsReducer.isFetching
    }
}

export default connect(mapStateToProps, { getSingleNotification })(SingleNotification)
