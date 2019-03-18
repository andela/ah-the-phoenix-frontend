import axios from "axios";
import { toastr } from 'react-redux-toastr'

export const axiosDefault = axios.create({
    baseURL:
        "https://cors-anywhere.herokuapp.com/https://ah-the-phoenix-staging.herokuapp.com/"
});

const user = JSON.parse(localStorage.getItem("user"));
let token = null;
if (user) {
    token = user.token;
} else {
    toastr.error("You need to be logged in!")
}
export const axiosWithToken = axios.create({
    baseURL:
        "https://cors-anywhere.herokuapp.com/https://ah-the-phoenix-staging.herokuapp.com/",
    headers: {
        Authorization: `token ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
