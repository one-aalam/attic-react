import React from 'react';
import Button, { OutlineButton, WhiteButton } from './Button';

const BasicAuth = () => (
    <form className="bg-white px-8 pt-6 pb-2 mb-4">
        <p className="max-w-2xl mb-2 text-xs leading-5 text-gray-600 w-full text-center">
            or, sign in by providing your credentials below
        </p>

        <div className="mb-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                username
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="username"
                type="text"
                placeholder="Jane"
                style={{ transition: "all .15s ease" }}
            />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>

        <div className="mb-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="******************" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>

        <div className="flex items-center justify-between flex-col">
            <Button display size="xl"> Sign In </Button>
            <a className="inline-block mt-3 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot your Password?
            </a>
        </div>
    </form>
)

export default BasicAuth;