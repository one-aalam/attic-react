const dev = {
    // put dev config here...
};

const prod = {
    // put prod config here...
};

const config = process.env.NODE_ENV === 'production'
  ? prod
  : dev;

export default {
  // Add common config values here
  GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  FB_CLIENT_ID: process.env.REACT_APP_FB_CLIENT_ID,
  SERVER_URI: process.env.REACT_APP_SERVER_URI,
  ...config
};
