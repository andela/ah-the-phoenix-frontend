import React, { Component } from 'react';
import './Home.scss';
import { connect } from 'react-redux'

const img = "https://res.cloudinary.com/dw675k0f5/image/upload/v1542661396/storo/book-book-pages-chapter-5834.jpg";

export class Home extends Component {

    render() {
        return (
            <div>
                <img className="main-image" src={img} alt="Authors haven" />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loginSuccess: state.loginReducer.loginSuccess
    }
}

export default connect(mapStateToProps)(Home);
