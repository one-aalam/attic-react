import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import { H3 } from '../components/Typography';

const AvatarIndex = () => {
    return (
    <React.Fragment>
        <H3 className="font-display font-bold w-full text-center">Avatars</H3>
        <div className="flex justify-around p-8 align-middle self-center">
            <span><Avatar name="Aftab" round bgCls="bg-gray-500" /></span>
            <span><Avatar name="Rajat" round bgCls="bg-yellow-500" /></span>
            <span><Avatar name="Vijay" round bgCls="bg-orange-500"/></span>
            <span><Avatar name="Aftab" round bgCls="bg-red-500" /></span>
            <span><Avatar name="Rajat" round bgCls="bg-green-500" /></span>
            <span><Avatar name="Vijay" round bgCls="bg-pink-500"/></span>
            <span><Avatar name="Purple" round bgCls="bg-green-500" /></span>
        </div>
    </React.Fragment>
)}

export default AvatarIndex;