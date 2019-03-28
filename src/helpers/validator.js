export const validate = (title, body, description) => {
    let titleError = null;
    let bodyError = null;
    let descriptionError = null;

    if (title.length === 0) {
        titleError = "Title field cannot be empty"
    }
    if (title.length > 49) {
        titleError = "Title too long. Title must be less than 50 characters"
    }
    if (body.length === 0) {
        bodyError = "The body field cannot be empty"
    }
    if (description.length === 0) {
        descriptionError = "The description field cannot be empty"
    }
    if (description.length > 399) {
        descriptionError = "The description is too long. Only 250 characters are allowed"
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