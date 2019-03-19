export const makeValidations = (name, value) => {
    let errors = null;
    let formState = null;
    let usernameErrors = null;


    let emailErrors = null;
    let passwordErrors = null;

    if (name === "username") {
        let user = value;
        let regex = /\d/g;
        if (user.length < 2) {
            errors = true
            formState = { username: true }
            usernameErrors = { username: "Username must be more than 2 characters" }
            return {
                name,
                errors,
                formState,
                usernameErrors
            }
        }
        else if (regex.test(user)) {
            errors = true
            formState = { username: true }
            usernameErrors = { username: "Username should not contain numbers" }
            return {
                name,
                errors,
                formState,
                usernameErrors
            }
        }
        else {
            errors = null
            formState = { username: null }
            usernameErrors = { username: null }
            return {
                name,
                val: value,
                errors,
                formState,
                usernameErrors
            }
        }

    }

    if (name === "email") {

        const regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const emailValid = regex.test(String(value).toLowerCase())
        if (!emailValid) {
            formState = { email: true }
            errors = true
            emailErrors = { email: "Please enter a valid email" }
            return {
                name,
                errors,
                formState,
                emailErrors
            }
        }
        else {
            errors = null
            formState = { email: null }
            emailErrors = { email: null }
            return {
                val: value,
                name,
                errors,
                formState,
                emailErrors
            }
        }
    }
    if (name === "password") {
        let pass = value;
        if (pass.length < 8) {
            formState = { password: true }
            errors = true
            passwordErrors = {
                password: "password cannot be less than 8 characters"
            }
            return {
                name,
                errors,
                formState,
                passwordErrors
            }
        }

        else if (pass.length > 50) {
            formState = { password: true }
            errors = true
            passwordErrors = {
                password: "password cannot be greater than 50 characters"
            }
            return {
                name,
                errors,
                formState,
                passwordErrors
            }

        }
        else if (!pass.match(/^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/)) {
            formState = { password: true }
            errors = true
            passwordErrors = {
                password: "please consider a password that has a number, an uppercase letter, lowercase letter and a special character"
            }
            return {
                name,
                errors,
                formState,
                passwordErrors
            }
        }
        else {
            errors = null
            formState = { password: null }
            passwordErrors = { password: null }
            return {
                val: value,
                name,
                errors,
                formState,
                passwordErrors
            }
        }
    }
}