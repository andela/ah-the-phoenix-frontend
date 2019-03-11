import axios from 'axios';

export const axiosDefault = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://ah-the-phoenix-staging.herokuapp.com/"
});

export const axiosWithToken = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://ah-the-phoenix-staging.herokuapp.com/",
    headers: {
        'Authorization': `token ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});