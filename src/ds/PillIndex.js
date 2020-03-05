import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon } from '../components/Icon';
import { H3 } from '../components/Typography';
// import Pill from './components/Pill';
// import { CircleImage } from './components/Image';
import Breadcrumb from '../components/Breadcrumb';

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
                        {/* <H3 className="font-display font-bold w-full text-center">Pills</H3>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><CircleImage src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""></CircleImage></span>
            </div>
            <H3 className="font-display font-bold w-full text-center">Image</H3>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Pill className="font-display"><FacebookIcon /> cool</Pill></span>
            </div> */}

            {/* <H3 className="font-display font-bold w-full text-center">Modal</H3> */}

            <Breadcrumb items={["one", "two", "three"]} />
        </div>
    </React.Fragment>
)}

export default ComponentIndex;