import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon } from '../components/Icon';
import { H3 } from '../components/Typography';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

const FormIndex = () => {
    return (
    <React.Fragment>
        <H3 className="font-display font-bold w-full text-center">Form Controls</H3>
            <Input onChange={() => {}} />
            <Input icon="hh" invalid={true} type="password"  message={"this isn't cool with us fellas"} onChange={() => {}}/>
            <Textarea />
    </React.Fragment>
)}

export default FormIndex;