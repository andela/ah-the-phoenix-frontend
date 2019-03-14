import React, { Component } from 'react'
import * as firebase from 'firebase'
import { sociaLogin } from '../../redux/actioncreators/loginActions'
import { connect } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import { Grid, Icon, Button } from 'semantic-ui-react'

firebase.initializeApp({
    apiKey: "AIzaSyD011SZkWcr2X3XGx9fYYaOFDqEJMqvbSE",
    authDomain: "ah-the-phoenix.firebaseapp.com"
})

export const auth = firebase.auth();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider()


export class SocialAuth extends Component {


    setProvider = (e) => {
        let provider = null;
        let name = '';
        if (e.target.name === "google") {
            provider = GoogleProvider;
            name = "google-oauth2";
        }
        if (e.target.name === "facebook") {
            name = "facebook";
            provider = FacebookProvider
        }
        if (e.target.name === "twitter") {
            name = "twitter";
            provider = TwitterProvider;
        }
        this.getSocialInfo(provider, name);
    }

    getSocialInfo = (provider, name) => {
        auth.signInWithPopup(provider).then(res => {
            let site_details = {
                access_token: res.credential.accessToken,
                client_provider: name
            }
            let site_twitter_detail = {
                access_token: res.credential.accessToken,
                client_provider: name,
                access_token_secret: res.credential.secret
            }
            if (name === "twitter") {
                this.props.sociaLogin(site_twitter_detail);
            } else {
                this.props.sociaLogin(site_details);
            }

        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { isFetching, loginSuccess, history } = this.props;
        if (isFetching === true) {
            return (
                <div>
                    <Loader />
                </div>
            )
        }
        if (loginSuccess === true) {
            history.push("/");
        }
        return (
            <Grid.Column verticalAlign='middle'>
                <Button fluid color='facebook' name="facebook" onClick={this.setProvider}>
                    <Icon name='facebook' /> Signin with Facebook
                        </Button><br></br>
                <Button fluid color='twitter' name='twitter' onClick={this.setProvider}>
                    <Icon name='twitter' /> Signin with Twitter
                        </Button><br></br>
                <Button fluid color='google plus' name="google" onClick={this.setProvider}>
                    <Icon name='google plus' /> Signin with Google
                        </Button><br></br>
            </Grid.Column>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.loginReducer.isFetching,
        loginSuccess: state.loginReducer.loginSuccess
    }
}

export default connect(mapStateToProps, { sociaLogin })(SocialAuth)
