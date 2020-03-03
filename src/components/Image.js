import React from 'react';

export const CircleImage = ({ alt, src, className }) => (
    <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4">
            <img src={src} alt={alt} className={className + " shadow rounded-full max-w-full h-auto align-middle border-none"} />
        </div>
    </div>
)