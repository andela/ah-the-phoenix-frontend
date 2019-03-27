import React, { Component } from 'react'
import {
    FacebookIcon, FacebookShareButton,
    TwitterIcon, TwitterShareButton,
    EmailIcon, EmailShareButton
} from 'react-share';
import './SocialShare.scss'

export class SocialShare extends Component {
    render() {
        const facebookLink = window.location.href;
        const twitterLink = window.location.href;
        return (
            <div class="social-btns">
                <EmailShareButton className="share-button" subject="Here is a nice article from authors haven" body={window.location.href}>
                    <EmailIcon
                    /></EmailShareButton>

                <FacebookShareButton className="fb-xfbml-parse-ignore share-button" url={facebookLink} title="Authors Haven" quote="Here is a great article">
                    <FacebookIcon />
                </FacebookShareButton>

                <TwitterShareButton className="share-button" url={twitterLink} title="Authors Haven" via="authorsHaven21"><TwitterIcon /></TwitterShareButton>
            </div>
        )
    }
}

export default SocialShare
