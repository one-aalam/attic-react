import React from 'react';
import { authenticate, isAuth } from './utils';
import GoogleAuth from './GoogleAuth';
import FacebookAuth from './FacebookAuth';
import Layout from './Layout';
import { ButtonMedium } from './components/Button';

const Signin = ({ history }) => {

    const onSuccess = response => {
        authenticate(response, () => {
            isAuth() && isAuth().roles.indexOf('ROLE_ADMIN') !== -1 ? history.push('/admin') : history.push('/profile');
        });
    };

    return (
        <Layout>
            <div className="bg-gray-100 w-full h-screen flex justify-center">
                <div className="container sm:w-full md:w-2/3 lg:w-1/3 py-32">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-8 border-b border-gray-200 sm:px-6">
                            <h3 className="font-display text-3xl font-bold text-lg leading-6 font-medium text-gray-900 w-full text-center">
                                Sign In
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-5 text-gray-500 w-full text-center">
                                Provide your username/email and password.
                            </p>
                        </div>
                        <div>
                            <form className="bg-white px-8 pt-6 pb-2 mb-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="" />
                                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                                </div>
                                <div className="flex items-center justify-between flex-col">
                                    <ButtonMedium> Sign In </ButtonMedium>
                                    <a className="inline-block mt-3 align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>

                        <div className="flex items-center justify-between flex-col px-8">
                            <p className="mt-6 max-w-2xl text-xs leading-5 text-gray-500 w-full text-center">
                                If you'd like to use any of your social identities, please click any of the below button to continue.
                            </p>
                        </div>

                        <div className="social-auth flex px-4 py-5 justify-center">
                            <GoogleAuth onSuccess={onSuccess} />
                            <br />
                            <FacebookAuth onSuccess={onSuccess} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signin;