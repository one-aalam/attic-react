import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon } from '../components/Icon';
import { H3 } from '../components/Typography';
import Button, { WhiteButton, OutlineButton } from '../components/Button';
import Modal from '../components/Modal';
import ConfirmModal from '../components/ConfirmModal';
import { showToast } from '../utils';
import Toast from '../components/Toast';


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
                <Modal title="Centered Modal (Bigger Content)" onClose={() => setShowModal(!showModal)} render={({close}) => {
                    return <React.Fragment>
                        <p>lorem ipsum dolerlorem ipsum doler sit  m ipsum doler s m ipsum doler s m ipsum doler s m ipsum doler s m ipsum doler s ametlorem ipsum doler sit ametlorem ipsum doler sit ame ametlorem ipsum doler sit amet  ametlorem ipsum doler sit amet  ametlorem ipsum doler sit amet  ametlorem ipsum doler sit amet  t sit amet lorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit ametlorem ipsum doler sit amet</p>
                    </React.Fragment>
                }} link={({ open }) => <Button display secondary onClick={open}>Open Modal (centered)</Button>}></Modal>
                </span>

                <span>
                <Modal title="Modal on the sides" aside onClose={() => setShowModal(!showModal)} render={({close}) => {
                    return <React.Fragment><p>lorem ipsum doler sit amet</p> </React.Fragment>
                }} link={({ open }) => <Button display secondary onClick={open}>Open Modal (aside)</Button>}></Modal>
                </span>
                <span>
                    <ConfirmModal title="Confirm Modal" variant="danger" onConfirm={() => console.log('confirm')} link={({ open }) => <Button display secondary onClick={open}>Open Confirm Modal </Button>}></ConfirmModal>
                </span>
                <span>
                <Button display secondary onClick={() => showToast({ title: 'Confirmed'})}>Show Toast</Button>
                </span>
            </div>
    </React.Fragment>
)}

export default ModalIndex;