import axios from 'axios';
import { getCookie, signout } from '../utils';
import config from '../config';

const token = getCookie('token');

export const getUserProfile = (id) => {
    return axios({
        method: 'GET',
        url: `${config.SERVER_URI}/users/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getUsers = () => {
    return axios({
        method: 'GET',
        url: `${config.SERVER_URI}/users`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const onApiError = (error) => {
    console.log('Couldn\'t pull the required details', error.response.data.error);
    if (error.response.status === 401) {

    }
}

export const signOutAndRedir = (history) => {
    signout(() => {
        history.push('/');
    });
}