import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Header } from "semantic-ui-react";
import { subscribeNotifications } from "../../redux/actioncreators/subscribeActions";

export class UserSettings extends Component {
  handleClick = e => {
    this.props.subscribeNotifications();
  };
  render() {
    const getNotifications = this.props.profile.get_notifications;
    let subscriptionSegment = null;
    if (getNotifications === true) {
      subscriptionSegment = (
        <Fragment>
          <Header as="h2">Your are already subscribed to notifications</Header>
          <p>
            To unsubscribe, click the unsubscribe link on the notification
            emails
          </p>
        </Fragment>
      );
    } else if (getNotifications === false) {
      subscriptionSegment = (
        <Fragment>
          <Header as="h2">
            Subscribe to notifications by clicking this button
          </Header>
          <Button color="green" onClick={this.handleClick} size="medium">
            Subscribe
          </Button>
        </Fragment>
      );
    }
    return <div>{subscriptionSegment}</div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { subscribeNotifications }
)(UserSettings);
