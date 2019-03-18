export const validate = (title, body, description) => {
    let titleError = null;
    let bodyError = null;
    let descriptionError = null;

    if (title.length === 0) {
        titleError = "Title field cannot be empty"
    }
    if (body.length === 0) {
        bodyError = "The body field cannot be empty"
    }
    if (description.length === 0) {
        descriptionError = "The description field cannot be empty"
    }
    if (titleError || bodyError || descriptionError) {
        return {
            titleError, bodyError, descriptionError
        }
    }
    else {
        return null;
    }
}