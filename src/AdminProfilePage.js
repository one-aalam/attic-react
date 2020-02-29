import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import axios from 'axios';
import { isAuth, getCookie, signout } from './utils';
import config from './config';

const AdminProfilePage = ({ history }) => {
    const [ user, setUser ] = useState({
        id: '',
        username: '',
        email: ''
    });

    const token = getCookie('token');

    useEffect(() => loadUserProfile(), [ user.id ]);

    const loadUserProfile = () => {
        axios({
            method: 'GET',
            url: `${config.SERVER_URI}/users/${isAuth().id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => setUser(response.data))
            .catch(error => {
                console.log('Couldn\'t pull the profile details', error.response.data.error);
                if (error.response.status === 401) {
                    signout(() => {
                        history.push('/');
                    });
                }
            });
    };

    return (
        <Layout>
            <div className="">
                <h1 className="">Admin Profile</h1>
                { user.username } {user.email}
            </div>
        </Layout>
    );
};

export default AdminProfilePage;
