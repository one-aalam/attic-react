import React from 'react';
import { authenticate, isAuth } from './utils';
import GoogleAuth from './components/GoogleAuth';
import FacebookAuth from './components/FacebookAuth';
import BasicAuth from './components/BasicAuth';
import Layout from './Layout';

const Signin = ({ history }) => {

    const onSuccess = response => {
        authenticate(response, () => {
            isAuth() && isAuth().roles.indexOf('ROLE_ADMIN') !== -1 ? history.push('/admin') : history.push('/profile');
        });
    };

    return (
        <Layout>
            {/* Section */}
            <section className="absolute w-full h-full">
                {/* Backdrop */}
                {/* Container */}
            <div className="container mx-auto px-4 h-full">
                {/* Content */}
            <div className="flex content-center items-center justify-center h-full">
                {/* CenterpieceContainer */}
                <div className="w-full md:6/12 lg:w-5/12 px-4">
                    {/* Card */}
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                        {/* Heading */}
                        <div className="px-4 py-8 border-b border-gray-200 sm:px-6">
                            <h3 className="font-display text-3xl font-bold text-lg leading-6 font-medium text-gray-900 w-full text-center">
                                Sign In
                            </h3>
                        </div>
                            {/* Social Login */}
                        <div className="flex items-center justify-between flex-col px-8">
                            <p className="mt-4 max-w-2xl text-xs leading-5 text-gray-600 w-full text-center">
                                If you'd like to use any of your social identities, please click any of the below button to continue.
                            </p>
                            <div className="social-auth flex px-4 py-4 justify-center">
                                <GoogleAuth onSuccess={onSuccess} />
                               &nbsp;&nbsp;
                                <FacebookAuth onSuccess={onSuccess} />
                            </div>
                        </div>
                        <div>
                            <BasicAuth/>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </section>
        </Layout>
    );
};

export default Signin;