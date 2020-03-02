import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import config from '../config';
import Button from './Button';
import { GoogleIcon } from './Icon';

const GoogleAuth =  ( { onSuccess, className } ) =>  {
  const successFailureCb = response => {
    axios({
        method: 'POST',
        url: `${config.SERVER_URI}/auth/google-login`,
        data: { idToken: response.tokenId }
    })
        .then(response => {
            console.log('GOOGLE SIGNIN SUCCESS', response);
            onSuccess(response);

        })
        .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
        });
  };

  return (
    <div className="social-auth__google">
        <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                onSuccess={successFailureCb}
                onFailure={successFailureCb}
                render={renderProps => (
                    <Button size="md" secondary display
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        <GoogleIcon />Login with Google
                    </Button>
                )}
                cookiePolicy={'single_host_origin'}
            />
    </div>
  );
}

export default GoogleAuth;
