import React, { Component } from 'react'
import {
    FacebookIcon, FacebookShareButton,
    TwitterIcon, TwitterShareButton,
    EmailIcon, EmailShareButton,
    WhatsappShareButton, WhatsappIcon
} from 'react-share';
import './SocialShare.scss'

export class SocialShare extends Component {
    render() {
        const shareLink = window.location.href;
        return (
            <div className="social-btns">
                <WhatsappShareButton className="share-button" url={shareLink} title="Authors Haven"><WhatsappIcon size={50} /></WhatsappShareButton>
                <EmailShareButton className="share-button" subject="Here is a nice article from authors haven" body={shareLink}>
                    <EmailIcon size={50}
                    /></EmailShareButton>

                <FacebookShareButton className="fb-xfbml-parse-ignore share-button" url={shareLink} title="Authors Haven" quote="Here is a great article">
                    <FacebookIcon size={50} />
                </FacebookShareButton>

                <TwitterShareButton className="share-button" url={shareLink} title="Authors Haven" via="authorsHaven21"><TwitterIcon size={50} /></TwitterShareButton>
            </div>
        )
    }
}

export default SocialShare
