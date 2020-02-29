import React from 'react';
import { authenticate, isAuth } from './utils';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';
import Layout from './Layout';

const Signin = ({ history }) => {

    const onSuccess = response => {
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/profile');
        });
    };

    return (
        <Layout>
            <div className="social-auth">
                <GoogleAuth onSuccess={onSuccess} />
                <FacebookAuth onSuccess={onSuccess} />
            </div>
        </Layout>
    );
};

export default Signin;