import React, { useState } from 'react';
import { EmailIcon, EyeIcon, EyeOffIcon } from '../components/Icon';
import { H3 } from '../components/Typography';
import Input from '../components/FormControl/Input';
import Textarea from '../components/FormControl/Textarea';
import ProgressBar from '../components/ProgressBar';

const FormIndex = () => {
    const [showPass, setShowPass] = useState(false);
    const togglePass = () => {
        setShowPass(!showPass);
    };
    return (
    <React.Fragment>
        <H3 className="font-display font-bold w-full text-center">Form Controls</H3>
            <Input id={'username'} label="Username" message="Concisely and brief, is always sweet!" onChange={() => {}} />
            <Input id={'email'} label="Email" icon={EmailIcon} required={true} onChange={() => {}}/>
            <Input id={'password'} type={ showPass ? 'text' : 'password' } label="Password" invalid={true}  message={"this isn't cool with us fellas"} onChange={() => {}}>
                { showPass ? <i onClick={togglePass}><EyeIcon  /></i> : <i onClick={togglePass}><EyeOffIcon  /></i> }
            </Input>
            <ProgressBar width={100} percent={40} />
            <Textarea id={'message'} message="Concisely summarize the issue in one or two sentences" />
    </React.Fragment>
)}

export default FormIndex;