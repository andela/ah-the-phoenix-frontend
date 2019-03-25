import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { subscribeNotifications } from "../../redux/actioncreators/subscribeActions";

export class UserSettings extends Component {
  componentDidMount = () => {
    this.props.subscribeNotifications();
  };

  handleClick = e => {
    this.setState({
      subscribed: true
    });
  };
  render() {
    return (
      <div>
        You can either opt in or opt out of notifications <br />
        <Button color="green"
        onClick={this.handleClick}
        >Subscribe</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { subscribeNotifications }
)(UserSettings);
