import React from 'react';

export const Paragraph = ({ children }) => (<p className="text-base font-light leading-relaxed mt-0 mb-4">{children}</p>);
export const LeadText = ({ children }) => (<p className="text-lg font-light leading-relaxed mt-6 mb-4">{children}</p>);
export const SmallText = ({ children }) => (<small className="font-normal leading-normal mt-0 mb-4">{children}</small>);

export const H1 = ({ children, className }) => (<h1 className={"text-6xl font-normal leading-normal mt-0 mb-2 " + className}>{children}</h1>);
export const H2 = ({ children, className }) => (<h1 className={"text-5xl font-normal leading-normal mt-0 mb-2 " + className}>{children}</h1>);
export const H3 = ({ children, className }) => (<h1 className={"text-4xl font-normal leading-normal mt-0 mb-2 " + className}>{children}</h1>);
export const H4 = ({ children, className }) => (<h1 className={"text-3xl font-normal leading-normal mt-0 mb-2 " + className}>{children}</h1>);
export const H5 = ({ children, className }) => (<h1 className={"text-2xl font-normal leading-normal mt-0 mb-2 " + className}>{children}</h1>);
export const H6 = ({ children, className }) => (<h1 className={"text-xl font-normal leading-normal mt-0 mb-2 " + className}>{children}</h1>);