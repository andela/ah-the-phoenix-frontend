import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";
import { unsubscribeNotifications } from "../../redux/actioncreators/unsubscribeActions";
import { Message } from "semantic-ui-react";

class SubscribeLink extends Component {
  componentDidMount() {
    console.log(this.props);
    const { unsubscribeNotifications, match } = this.props;
    unsubscribeNotifications(match.params.uuid);
  }
  render() {
    if (this.props.isFetching) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div>
        <Message
          success
          header="Successful unsubscription"
          content="You will not receive notifications"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state
});
export default connect(
  mapStateToProps,
  { unsubscribeNotifications }
)(SubscribeLink);
