import React, { useState } from 'react';
import Layout from './Layout';
import Button, { WhiteButton, OutlineButton } from './components/Button';
import { FacebookIcon, GoogleIcon } from './components/Icon';
import { H3 } from './components/Typography';
// import Pill from './components/Pill';
// import { CircleImage } from './components/Image';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Breadcrumb from './components/Breadcrumb';
import Avatar from './components/Avatar';
import Modal from './components/Modal';
import ConfirmModal from './components/ConfirmModal';

const DS = () => {
    const [ showModal, setShowModal ] = useState(false);
    return (
    <Layout>
        <header className="App-header text-center py-6">
            <h2 className="font-display text-center text-4xl">Design System</h2>
            <p>
            Minimum number of homebrewed components to get you started quickly!
            </p>
        </header>
        <div className="mx-auto w-8/12">
            {/* <H3 className="font-display font-bold w-full text-center">Pills</H3>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><CircleImage src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e" alt=""></CircleImage></span>
            </div>
            <H3 className="font-display font-bold w-full text-center">Image</H3>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Pill className="font-display"><FacebookIcon /> cool</Pill></span>
            </div> */}

            <H3 className="font-display font-bold w-full text-center">Modal</H3>
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
            <H3 className="font-display font-bold w-full text-center">Avatar</H3>
            <div className="flex justify-around p-8 align-middle self-center">
                <span><Avatar name="Aftab" round bgCls="bg-gray-500" /></span>
                <span><Avatar name="Rajat" round bgCls="bg-yellow-500" /></span>
                <span><Avatar name="Vijay" round bgCls="bg-orange-500"/></span>
                <span><Avatar name="Aftab" round bgCls="bg-red-500" /></span>
                <span><Avatar name="Rajat" round bgCls="bg-green-500" /></span>
                <span><Avatar name="Vijay" round bgCls="bg-pink-500"/></span>
                <span><Avatar name="Purple" round bgCls="bg-green-500" /></span>
            </div>
            <Breadcrumb items={["one", "two", "three"]} />
            <H3 className="font-display font-bold w-full text-center">Form Controls</H3>
            <Input onChange={() => {}} />
            <Input icon="hh" invalid={true} type="password"  message={"this isn't cool with us fellas"} onChange={() => {}}/>
            <Textarea />
            <H3 className="font-display font-bold w-full text-center">Buttons</H3>
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
        </div>
    </Layout>
)}

export default DS;