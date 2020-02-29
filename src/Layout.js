import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from './utils';

const Layout = ({ children, match, history }) => {
    const isActive = path => {
        if (match.path === path) {
            return { textDecoration: 'underline', color: '#000' };
        } else {
            return { };
        }
    };

    const nav = () => (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive('/')}>
                    Home
                </Link>
            </li>

            {!isAuth() && (
                <React.Fragment>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link" style={isActive('/signin')}>
                            Signin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" style={isActive('/signup')}>
                            Signup
                        </Link>
                    </li>
                </React.Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive('/admin')} to="/admin">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && isAuth().role !== 'admin' && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive('/profile')} to="/profile">
                        {isAuth().name}
                    </Link>
                </li>
            )}

            {isAuth() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            signout(() => {
                                history.push('/');
                            });
                        }}
                    >
                        Signout
                    </span>
                </li>
            )}
        </ul>
    );

    return (
        <React.Fragment>
            {nav()}
            <div className="container">{children}</div>
        </React.Fragment>
    );
};

export default withRouter(Layout);
