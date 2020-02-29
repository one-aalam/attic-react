import React from 'react';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import config from './config';

const FacebookAuth =  ( { onSuccess } ) =>  {

  const responseCb = response => {
    axios({
        method: 'POST',
        url: `${config.SERVER_URI}/auth/facebook-login`,
        data: { userId: response.userID, accessToken: response.accessToken }
    })
        .then(response => {
            console.log('FACEBOOK SIGNIN SUCCESS', response);
            onSuccess(response);

        })
        .catch(error => {
            console.log('FACEBOOK SIGNIN ERROR', error.response);
        });
  };

  return (
    <div className="social-auth__facebook">
        <FacebookLogin
                appId={config.FB_CLIENT_ID}
                autoLoad={false}
                callback={responseCb}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">
                        <i className="fab fa-facebook pr-2"></i> Login with Facebook
                    </button>
                )}
            />
    </div>
  );
}

export default FacebookAuth;
