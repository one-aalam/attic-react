import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon } from '../components/Icon';
import { H3 } from '../components/Typography';
import Button, { WhiteButton, OutlineButton } from '../components/Button';
import Modal from '../components/Modal';
import ConfirmModal from '../components/ConfirmModal';


const ModalIndex = () => {
    const [ showModal, setShowModal ] = useState(false);
    return (
    <React.Fragment>
            {/* <H3 className="font-display font-bold w-full text-center">Modals</H3> */}
            <div className="flex justify-around p-8 align-middle self-center">
                <span>
                <Modal title="Centered Modal" onClose={() => setShowModal(!showModal)} render={({close}) => {
                    return <React.Fragment><p>lorem ipsum doler sit amet</p> </React.Fragment>
                }} link={({ open }) => <Button display secondary onClick={open}>Open Modal (centered)</Button>}></Modal>
                </span>
                <span>
                <Modal title="Modal on the sides" aside onClose={() => setShowModal(!showModal)} render={({close}) => {
                    return <React.Fragment><p>lorem ipsum doler sit amet</p> </React.Fragment>
                }} link={({ open }) => <Button display secondary onClick={open}>Open Modal (aside)</Button>}></Modal>
                </span>
                <span>
                <ConfirmModal title="Centered Modal" variant="danger" onConfirm={() => console.log('confirm')} link={({ open }) => <Button display secondary onClick={open}>Open Confirm Modal </Button>}></ConfirmModal>
                </span>
            </div>
    </React.Fragment>
)}

export default ModalIndex;