import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import config from './config';
import './App.css';

function App() {
  const responseGoogle = response => {
    axios({
        method: 'POST',
        url: `${config.SERVER_URI}/auth/google-login`,
        data: { idToken: response.tokenId }
    })
        .then(response => {
            console.log('GOOGLE SIGNIN SUCCESS', response);
            // inform parent component
            // informParent(response);

        })
        .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
        });
  };

  const responseFacebook = response => {
    axios({
        method: 'POST',
        url: `${config.SERVER_URI}/auth/facebook-login`,
        data: { userId: response.userID, accessToken: response.accessToken }
    })
        .then(response => {
            console.log('FACEBOOK SIGNIN SUCCESS', response);
            // inform parent component
            // informParent(response);

        })
        .catch(error => {
            console.log('FACEBOOK SIGNIN ERROR', error.response);
        });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="btn btn-danger btn-lg btn-block"
                    >
                        <i className="fab fa-google pr-2"></i> Login with Google
                    </button>
                )}
                cookiePolicy={'single_host_origin'}
            />
        <FacebookLogin
                appId={config.FB_CLIENT_ID}
                autoLoad={false}
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">
                        <i className="fab fa-facebook pr-2"></i> Login with Facebook
                    </button>
                )}
            />
      </header>
    </div>
  );
}

export default App;
