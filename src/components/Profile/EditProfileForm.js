import React, { Component, Fragment } from 'react';
import { Form, Button, Card, Header } from 'semantic-ui-react';
import { editProfile } from '../../redux/actioncreators/editProfile';
import { connect } from 'react-redux';
import './profile.scss';
import uploader from '../../helpers/uploader';

export class EditProfileForm extends Component {
    state = {
        username: '',
        bio: '',
        image: '',
        uploadedImage: null
    }
    componentDidMount() {
        const { profile } = this.props;
        this.setState({
            username: profile.username,
            bio: profile.bio,
            image: profile.image,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            bio: this.state.bio,
            image: this.state.uploadedImage || this.state.image
        }
        this.props.editProfile({ "user": user } || { "user": this.state })
    }
    fileSelectHandler = (event) => {
        const selectedFile = event.target.files[0];
        uploader({ image: selectedFile })
            .then(res => {
                if (res) {
                    const image = res.data;
                    this.setState({ uploadedImage: image.secure_url });
                }
            });

    }
    render() {
        return (
            <Fragment>
                <Card className="edit-profile">
                    <Card.Content>
                        <Form onSubmit={this.handleLogin}>
                            <Header textAlign="center" as='h3'><br />Edit your profile</Header>
                            <br></br>
                            <div>
                                {/* eslint-disable-next-line */}
                                <img src={this.state.image.slice(13)}
                                    style={{ height: "100px", width: "100px" }}
                                    alt={this.state.username}
                                    onClick={() => this.fileInput.click()}
                                />
                                {/* eslint-disable-next-line */}
                                <a onClick={() => this.fileInput.click()}>
                                </a>
                            </div>
                            <input
                                type="file"
                                onChange={this.fileSelectHandler}
                                className="file-input"
                                ref={(fileInput) => { this.fileInput = fileInput; }}
                            />
                            <Form.TextArea label='Bio' name="bio" placeholder="" onChange={this.handleChange} value={this.state.bio} />
                            <Button fluid content='Save' type="submit" className="ui green button" onClick={this.handleSubmit} />
                            <br />
                        </Form>
                    </Card.Content>
                    <Card.Content extra>

                    </Card.Content>
                </Card>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile
    }
}

export default connect(mapStateToProps, { editProfile })(EditProfileForm)
