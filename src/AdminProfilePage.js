import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Loader from './components/Loader';
import { isAuth } from './utils';
import { getUserProfile, getUsers } from "./services";

const AdminProfilePage = ({ history }) => {
    const userId = isAuth().id;
    const [ user, setUser ] = useState({
        id: '',
        username: '',
        email: ''
    });
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getPageData = async () => {
            try {
                const [ user, users] = await Promise.all([ getUserProfile(userId), getUsers() ]);
                if (user.data && users.data) {
                    setUser(user.data);
                    setUsers(users.data);
                    setLoading(false);
                }
            } catch(err) {
                setLoading(false);
                // react to error
                console.log('Couldn\'t pull the required details', err.response.data.error);
            }
        }
        getPageData();
    }, [ userId ]);

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
