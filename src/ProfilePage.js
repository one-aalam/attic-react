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
            <div className="bg-gray-100 w-full h-screen">
                <div className="container mx-auto py-32">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                            Your Personal details.
                        </p>
                    </div>
                    <div>
                        <dl>
                            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dd className="text-sm leading-5 font-medium text-gray-500">
                                    Full name
                                </dd>
                                <dt className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                    { user.username }
                                </dt>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dd className="text-sm leading-5 font-medium text-gray-500">
                                    Email
                                </dd>
                                <dt className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user.email}
                                </dt>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    );
};

export default ProfilePage;
