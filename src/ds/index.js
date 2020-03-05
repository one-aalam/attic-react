import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from '../Layout';
import { H3 } from '../components/Typography';

import ButtonIndex from './ButtonIndex';
import FormIndex from './FormIndex';
import ModalIndex from './ModalIndex';
import AvatarIndex from './AvatarIndex';

const components = {
    button: {
        displayName: 'Button',
        component: ButtonIndex
    },
    avatar: {
        displayName: 'Avatar',
        component: AvatarIndex
    },
    control: {
        displayName: 'Modal',
        component: ModalIndex
    },
    modal: {
        displayName: 'Form',
        component: FormIndex
    }
}

const SubView = ({ match }) => {
      return (
        <div className="mx-auto w-8/12">
            {components[match.params.sectionName] ? components[match.params.sectionName].component() : 'Not Found!'}
        </div>
        )
};

const DS = ({ match }) => {
    return (
    <Layout>
        <header className="App-header text-center py-6">
            <h2 className="font-display text-center text-4xl">Design System</h2>
            <p>
            Minimum number of homebrewed components to get you started quickly!
            </p>
        </header>
        <div className="grid">
            <div className="grid-cols-2"></div>
            <Route exact path={match.url} render={() => (
                <h3>Please select a section:</h3>
            )}/>
            {
                Object.keys(components).map(c => <Link key={c} to={`${match.url}/${c}`}>{components[c].displayName} &nbsp;</Link>)
            }
            </div>
            <div className="grid-col-8 mx-auto w-8/12">
                <Route path={`${match.url}/:sectionName`} component={SubView}/>
            </div>
    </Layout>
)}

export default DS;