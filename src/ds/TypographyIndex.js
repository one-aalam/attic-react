import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon } from '../components/Icon';
import { H3 } from '../components/Typography';

const ComponentIndex = () => {
    return (
    <React.Fragment>
        <header className="App-header text-center py-6">
            <h2 className="font-display text-center text-4xl">Component</h2>
            <p>
            Minimum number of homebrewed components to get you started quickly!
            </p>
        </header>
        <div className="mx-auto w-8/12">
            <H3 className="font-display font-bold w-full text-center">Buttons</H3>

        </div>
    </React.Fragment>
)}

export default ComponentIndex;