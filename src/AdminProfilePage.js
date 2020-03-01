import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Loader from './components/Loader';
import axios from 'axios';
import { isAuth, getCookie, signout } from './utils';
import config from './config';

const AdminProfilePage = ({ history }) => {
    const [ user, setUser ] = useState({
        id: '',
        username: '',
        email: ''
    });
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const token = getCookie('token');

    useEffect(() => loadUserProfile(), [ user.id ]);
    useEffect(() => loadUsers(), [ user.id ]);

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
            }).finally(() => {
                setLoading(false);
            });
    };

    const loadUsers = () => {
        axios({
            method: 'GET',
            url: `${config.SERVER_URI}/users`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => setUsers(response.data))
            .catch(error => {
                console.log('Couldn\'t pull the profile details', error.response.data.error);
                if (error.response.status === 401) {
                    signout(() => {
                        history.push('/');
                    });
                }
            });
    };

    if (loading) {
        return <Loader/>
    }

    return (
        <Layout>
            <div className="">
                <h1 className="">Admin Profile</h1>
                { user.username } {user.email}
                <h3>Users</h3>
                <ul>
                {
                    users.map(user => <li key={user.id}>{user.username}</li>)
                }
                </ul>
            </div>
        </Layout>
    );
};

export default AdminProfilePage;
