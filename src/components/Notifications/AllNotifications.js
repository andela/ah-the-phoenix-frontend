import React, { Component } from 'react'
import Notifications from './Notifications'

export class AllNotifications extends Component {
    render() {
        return (
            <div className="all-notifications">
                <h1 className="notifications-title">Notifications</h1>
                <br></br>
                <Notifications all="all" allstyle="all-style" />
            </div>
        )
    }
}

export default AllNotifications
