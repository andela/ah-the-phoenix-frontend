import React, { Component } from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import { connect } from 'react-redux'
import firebase from 'firebase';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const options = [
        {
          key: 'user', icon: 'user', text: (
            <span>
              <strong>Profile</strong>
            </span>
          )
        },
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
      ]

      const trigger = (
        <span>
          <Image avatar src={user.image} /> {user.username}
        </span>
      )

      return (

        <Menu secondary className="navbar">
          <Menu.Item
            name='Authors Haven'
            className="head-title"
            as={Link} to='/'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right' className="auth-menu">
            <Menu.Item>
              <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} /></Menu.Item>

            <Menu.Item
              icon='sign out'
              active={activeItem === 'logout'}
              onClick={() => {
                firebase.auth().signOut();
                localStorage.clear();
                window.location.replace('/');
              }}
            />

          </Menu.Menu>
        </Menu>
      )
    }
    else {

      return (
        <Menu secondary className="navbar">
          <Menu.Item
            name='Authors Haven'
            className="head-title"
            as={Link} to='/'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right' className="auth-menu">
            <Menu.Item
              name='Signup'
              as={Link} to='/signup'
              className="signup-btn"
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Login'
              as={Link} to='/login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.loginReducer.loginSuccess
  }
}

export default connect(mapStateToProps)(NavBar);
