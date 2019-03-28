import React, { Component, Fragment } from "react";
import { Menu, Container } from "semantic-ui-react";
import UserArticles from "./UserArticles";
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
      displayItem = <FollowersFollowing profile={profile} follow_list="followers" />
    } else if (this.state.activeItem === "following") {
      displayItem = <FollowersFollowing profile={profile} follow_list="following" />
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
        </Menu>
        <Fragment>{displayItem}</Fragment>
        <br />
        <br />
      </Container>
    );
  }
}

export default ProfileMenu;
