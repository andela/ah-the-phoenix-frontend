import React, { Component, Fragment } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import UserArticles from './UserArticles'

export class ProfileMenu extends Component {
    state = { activeItem: 'articles' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        let displayItem = null
        if (this.state.activeItem === "articles") {
            displayItem = <UserArticles author_id={this.props.author_id} />
        }
        return (
            <Container>
                <Menu tabular>
                    <Menu.Item name='articles' active={this.state.activeItem === 'articles'} onClick={this.handleItemClick} />
                    <Menu.Item name='bookmarks' active={this.state.activeItem === 'bookmarks'} onClick={this.handleItemClick} />
                </Menu>
                <Fragment>
                    {displayItem}
                </Fragment>
                <br></br>
                <br></br>
            </Container>
        )
    }
}

export default ProfileMenu
