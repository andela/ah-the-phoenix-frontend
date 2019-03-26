import React, { Component } from 'react'
import { getNotifications } from '../../redux/actioncreators/getNotifications'
import { connect } from "react-redux";
import { Card, Item } from 'semantic-ui-react'
import './Notification.scss'
import { Link } from "react-router-dom";


export class Notifications extends Component {
    componentDidMount() {
        this.props.getNotifications();
    }
    render() {
        const { isFetching, notifications } = this.props;

        const notificationsList =
            notifications && notifications.length !== 0 ? (notifications.slice(0, 6).map(notification => {
                const id = notification.id;
                const notificationLink = "/notifications/" + id
                return (
                    <Card fluid key={notification.id} className={notification.unread ? "read-notification" : null}>
                        <Card.Content>

                            <Item>
                                <Item.Content as={Link} to={notificationLink}>
                                    <p><b>{notification.actor.username}</b> just created an article named <b>{notification.action_object.title}</b></p>
                                </Item.Content>
                            </Item>

                            <Card.Meta> {notification.timesince} ago</Card.Meta>
                        </Card.Content>
                    </Card>)
            })) : (
                    <h5 className="notification-error">Oops! You dont have any notifications yet</h5>
                )
        return (
            <div className="notifications">
                <div className="notification-list">
                    {
                        isFetching ? <div className="notifications-load">{"Loading..."}</div> : (
                            <div>{notificationsList}</div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.getNotificationsReducer.isFetching,
        notifications: state.getNotificationsReducer.notifications
    }
}

export default connect(mapStateToProps, { getNotifications })(Notifications)
