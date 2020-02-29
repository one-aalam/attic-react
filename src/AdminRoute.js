import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from './utils';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() && isAuth().roles.indexOf('ROLE_ADMIN') !== -1 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);

export default AdminRoute;