import React, {useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from './utils';
import { useSticky } from './hooks/useSticky';

const Layout = ({ children, match, history }) => {
    const isActive = path => {
        if (match.path === path) {
            return { textDecoration: 'underline', color: '#000' };
        } else {
            return { };
        }
    };

    const Header = () => {
        const $headerRef = useRef();
        useSticky($headerRef);
        return (
        <header ref={$headerRef} className="relative z-10 border-b border-gray-200 bg-white flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-end">
                <Link to="/" className="block nav-link" style={isActive('/')}>
                    <img className="h-6 w-auto inline-block" src="/apple-touch-icon.png" alt="Attic - React" />
                    <h1 className="uppercase text-2xl font-display font-bold inline-block">attic</h1>
                </Link>
                <p className="hidden md:block ml-4 text-sm leading-5 text-gray-500">
                    Release 0.1.0
                </p>
                <Link to="/ds" className="hidden md:block ml-4 text-sm leading-5 text-gray-500" style={isActive('/ds')}>
                    components
                </Link>
            </div>

            {!isAuth() && (
                <React.Fragment>
                    <div className="flex text-sm leading-5">
                        <Link to="/signin" className="nav-link ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12" style={isActive('/signin')}>
                            Log In
                        </Link>
                        <Link to="/signup" className="nav-link ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12" style={isActive('/signup')}>
                            Register
                        </Link>
                    </div>
                </React.Fragment>
            )}

            {isAuth() && isAuth().roles.indexOf('ROLE_ADMIN') !== -1 && (
                <React.Fragment>
                    <div className="flex text-sm leading-5">
                        <Link className="nav-link ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12" style={isActive('/admin')} to="/admin">
                            {isAuth().name}
                        </Link>
                    </div>
                </React.Fragment>
            )}

            {isAuth() && isAuth().roles.indexOf('ROLE_ADMIN') === -1 && (
                <React.Fragment>
                    <div className="flex text-sm leading-5">
                        <Link className="nav-link ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12" style={isActive('/profile')} to="/profile">
                            {isAuth().name}
                        </Link>
                    </div>
                </React.Fragment>
            )}

            {isAuth() && (
                <React.Fragment>
                    <div className="flex text-sm leading-5">
                        <span
                            className="nav-link ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                signout(() => {
                                    history.push('/');
                                });
                            }}
                            >
                            Signout
                        </span>
                    </div>
                </React.Fragment>
            )}
        </header>
    )};

    return (
        <React.Fragment>
            {Header()}
            <main className="">{children}</main>
            <footer></footer>
        </React.Fragment>
    );
};

export default withRouter(Layout);
