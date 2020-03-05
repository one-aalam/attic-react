import React, { useState } from 'react';
import Button, { WhiteButton, OutlineButton } from '../components/Button';
import { FacebookIcon, GoogleIcon } from '../components/Icon';
import { H3 } from '../components/Typography';

const ButtonIndex = () => {
    return (
    <React.Fragment>
            {/* <H3 className="font-display font-bold w-full text-center">Buttons</H3> */}
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Button display size="sm">Small</Button></span>
                <span><Button display size="md">Medium</Button></span>
                <span><Button display size="lg">Large</Button></span>
                <span><Button display size="xl">X-Large</Button></span>
                <span><Button display size="xxl">XX-Large</Button></span>
            </div>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Button display secondary size="sm">Small</Button></span>
                <span><Button display secondary size="md">Medium</Button></span>
                <span><Button display secondary size="lg">Large</Button></span>
                <span><Button display secondary size="xl">X-Large</Button></span>
                <span><Button display secondary size="xxl">XX-Large</Button></span>
            </div>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><WhiteButton display size="sm">Small</WhiteButton></span>
                <span><WhiteButton display size="md">Medium</WhiteButton></span>
                <span><WhiteButton display size="lg">Large</WhiteButton></span>
                <span><WhiteButton display size="xl">X-Large</WhiteButton></span>
                <span><WhiteButton display  size="xxl">XX-Large</WhiteButton></span>
            </div>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><OutlineButton display size="sm">Small</OutlineButton></span>
                <span><OutlineButton display size="md">Medium</OutlineButton></span>
                <span><OutlineButton display size="lg">Large</OutlineButton></span>
                <span><OutlineButton display size="xl">X-Large</OutlineButton></span>
                <span><OutlineButton display size="xxl">XX-Large</OutlineButton></span>
            </div>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Button display><FacebookIcon /> Large</Button></span>
                <span><Button display secondary><FacebookIcon /> Large</Button></span>
                <span><WhiteButton display><FacebookIcon /> Large</WhiteButton></span>
                <span><OutlineButton display><FacebookIcon /> Large</OutlineButton></span>
            </div>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Button display><GoogleIcon solo /></Button></span>
                <span><Button display secondary><GoogleIcon solo /></Button></span>
                <span><WhiteButton display><GoogleIcon solo /></WhiteButton></span>
                <span><OutlineButton display><GoogleIcon solo /></OutlineButton></span>
            </div>
    </React.Fragment>
)}

export default ButtonIndex;