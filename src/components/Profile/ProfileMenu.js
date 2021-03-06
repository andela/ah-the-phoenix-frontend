import React, { Component, Fragment } from "react";
import { Menu, Container } from "semantic-ui-react";
import UserArticles from "./UserArticles";
import UserSettings from "./Subscribe";
import FollowersFollowing from './FollowersFollowing'
import ListBookmarkedArticles from './ListBookmarkedArticles';

export class ProfileMenu extends Component {
  state = { activeItem: "articles" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { profile } = this.props
    const user = JSON.parse(localStorage.getItem("user"))
    let bookmarkTab = null
    if (profile.id===user.user_id) {
      bookmarkTab = (
        <Menu.Item
            name="bookmarks"
            active={this.state.activeItem === "bookmarks"}
            onClick={this.handleItemClick}
          />
      )

    }
    let displayItem = null;
    if (this.state.activeItem === "articles") {
      displayItem = <UserArticles author_id={this.props.author_id} />;
    } else if (this.state.activeItem === "followers") {
      displayItem = (
        <FollowersFollowing profile={profile} follow_list="followers" />
      );
    } else if (this.state.activeItem === "following") {
      displayItem = (
        <FollowersFollowing profile={profile} follow_list="following" />
      );
    } else if (
      this.state.activeItem === "settings" &&
      user.username === profile.username
    ) {
      displayItem = <UserSettings profile={profile} />;
    }
    if (this.state.activeItem === "bookmarks") {
      displayItem = <ListBookmarkedArticles />;
    }
    return (
      <Container>
        <Menu tabular>
          <Menu.Item
            name="articles"
            active={this.state.activeItem === "articles"}
            onClick={this.handleItemClick}
          />
          {bookmarkTab}
          <Menu.Item
            name="followers"
            active={this.state.activeItem === "followers"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="following"
            active={this.state.activeItem === "following"}
            onClick={this.handleItemClick}
          />
          {user.username === profile.username ? (
            <Menu.Item
              name="settings"
              active={this.state.activeItem === "settings"}
              onClick={this.handleItemClick}
            />
          ) : null}
        </Menu>
        <Fragment>{displayItem}</Fragment>
        <br />
        <br />
      </Container>
    );
  }
}

export default ProfileMenu;
