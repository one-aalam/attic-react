import React from 'react';
import { authenticate, isAuth } from './utils';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';

const Signin = () => {

    const onSuccess = response => {
        authenticate(response, () => {
            isAuth() && isAuth().role === 'admin' ? console.log('admin: redir to admin route') : console.log('auth: redir to private route');
        });
    };

    return (
            <div className="social-auth">
                <GoogleAuth onSuccess={onSuccess} />
                <FacebookAuth onSuccess={onSuccess} />
            </div>
    );
};

export default Signin;