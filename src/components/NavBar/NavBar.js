import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { connect } from "react-redux";
import firebase from "firebase";

class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <Menu secondary className="navbar">
          <Menu.Item
            name="Authors Haven"
            className="head-title"
            as={Link} to='/'
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right" className="auth-menu">
            <Menu.Item
              name="Create Article"
              active={activeItem === 'Create Article'}
              as={Link} to='/create_article'
              onClick={this.handleItemClick}
            ></Menu.Item>

            <Menu.Item
              name="Profile"
              active={activeItem === 'Profile'}
              as={Link} to='/profile'   
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Logout"
              active={activeItem === "logout"}
              onClick={() => {
                firebase.auth().signOut();
                localStorage.clear();
                window.location.replace("/");
              }}
            />
          </Menu.Menu>
        </Menu>
      );
    } else {
      return (
        <Menu secondary className="navbar">
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
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Login"
              as={Link}
              to="/login"
              active={activeItem === "login"}
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
    loginSuccess: state.loginReducer.loginSuccess
  };
};

export default connect(mapStateToProps)(NavBar);
