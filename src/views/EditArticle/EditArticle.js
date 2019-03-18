import React, { Component } from 'react'
import CreateEditArticle from "../../components/CreateEditArticle/CreateEditArticle"

export class EditArticle extends Component {
    render() {
        const slug = this.props.match.params.slug
        return (
            <div>
                <CreateEditArticle action="update" slug={slug} />
            </div>
        )
    }
}

export default EditArticle
