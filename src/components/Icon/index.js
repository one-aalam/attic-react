import React from 'react';
import { ReactComponent as Facebook } from './facebook-outline.svg';
import { ReactComponent as Google } from './google-outline.svg';

// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
export const FacebookIcon = ({ solo }) => (
    <i className="text-sm inline-block"><Facebook className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)

export const GoogleIcon = ({ solo }) => (
    <i className="text-sm inline-block"><Google className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)