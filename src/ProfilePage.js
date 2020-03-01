import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Loader from './components/Loader';
import { isAuth } from './utils';
import { getUserProfile } from "./services";

const ProfilePage = ({ history }) => {
    const userId = isAuth().id;
    const [ user, setUser ] = useState({
        id: '',
        username: '',
        email: ''
    });
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getPageData = async () => {
            try {
                const user = await getUserProfile(userId);
                if (user.data) {
                    setUser(user.data);;
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
                <h1 className="">Profile</h1>
                { user.username } {user.email}
            </div>
        </Layout>
    );
};

export default ProfilePage;
