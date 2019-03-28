import React, { Component } from "react";
import { Menu, Label, Popup, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { connect } from "react-redux";
import firebase from "firebase";
import { getNotifications } from '../../redux/actioncreators/getNotifications'
import Notifications from '../Notifications/Notifications'

class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  componentDidMount() {
    this.props.getNotifications();
  }
  render() {

    const { activeItem } = this.state;
    const user = JSON.parse(localStorage.getItem("user"));
    let profileLink = null
    if (user) {
      profileLink = "/profile/" + user.user_id
      return (
        <Menu secondary className="fixed navbar" inverted>
          <Menu.Item
            name="Authors Haven"
            className="head-title animated lightSpeedIn"
            as={Link} to='/'
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right" className="auth-menu">
            <Menu.Item
              name="Create Article"
              icon="clipboard"
              active={activeItem === 'Create Article'}
              as={Link} to='/create_article'
              onClick={this.handleItemClick}
            ></Menu.Item>


            <Popup
              trigger={
                <Menu.Item
                  name="Notifications"
                  active={activeItem === 'Notifications'}
                  onClick={this.handleItemClick}
                >
                  <Icon className="bell"></Icon>Notifications
                  <Label color='red' floating>
                    {this.props.notificationCount}
                  </Label>
                </Menu.Item>
              }

              content={
                <Notifications />
              }
              position="bottom center"
              on="click"
              hideOnScroll
              size="small"
              wide>

            </Popup>

            <Menu.Item
              name="Profile"
              icon="user"
              active={activeItem === 'Profile'}
              as={Link} to={profileLink}
              onClick={this.handleItemClick}
            >
            </Menu.Item>
            <Menu.Item
              name="Logout"
              icon="sign-out"
              active={activeItem === 'logout'}
              onClick={() => {
                firebase.auth().signOut();
                localStorage.clear();
                window.location.replace("/");
              }}
            />
          </Menu.Menu>
        </Menu >
      );
    } else {
      return (
        <Menu secondary className="fixed navbar" inverted>
          <Menu.Item
            name="Authors Haven"
            className="head-title"
            as={Link}
            to="/"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right" className="auth-menu">
            <Menu.Item
              name="Signup"
              as={Link}
              to="/signup"
              className="signup-btn"
              icon="signup"
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Login'
              as={Link} to='/login'
              icon="sign-in"
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loginSuccess: state.loginReducer.loginSuccess,
    notificationCount: state.getNotificationsReducer.count
  }
}

export default connect(mapStateToProps, { getNotifications })(NavBar);
