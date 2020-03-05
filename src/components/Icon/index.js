import React from 'react';
import { ReactComponent as Facebook } from './facebook-outline.svg';
import { ReactComponent as Google } from './google-outline.svg';
import { ReactComponent as EmailOutline } from './email-outline.svg';
import { ReactComponent as EyeOffOutline } from './eye-off-outline.svg';
import { ReactComponent as EyeOutline } from './eye-outline.svg';

// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
export const FacebookIcon = ({ solo = true }) => (
    <i className="text-sm inline-block"><Facebook className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)

export const GoogleIcon = ({ solo = true }) => (
    <i className="text-sm inline-block"><Google className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)

export const EmailIcon = ({ solo = true }) => (
    <i className="text-sm inline-block"><EmailOutline className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)

export const EyeOffIcon = ({ solo = true }) => (
    <i className="text-sm inline-block"><EyeOffOutline className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)

export const EyeIcon = ({ solo = true }) => (
    <i className="text-sm inline-block"><EyeOutline className={ (!solo ? "-ml-1 mr-2 " : "") + "h-5 w-5"} fill="currentColor" /></i>
)