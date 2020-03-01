import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <span className="shadow-sm rounded-md">
      <button
        className="font-display font-extrabold inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        {...buttonProps}
      >
        {children}
      </button>
    </span>
  );
}

export function ButtonSecondary({ children, ...buttonProps }) {
  return (
    <span className="sm:ml-3 shadow-sm rounded-md">
      <button
        className="font-display font-extrabold inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        {...buttonProps}
      >
        {children}
      </button>
    </span>
  );
}


export function ButtonMedium({ children, ...buttonProps }) {
  return (
    <span className="shadow rounded-md">
      <button
        className="font-display font-extrabold inline-flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
        {...buttonProps}
      >
        {children}
      </button>
    </span>
  );
}

export function ButtonLarge({ children, ...buttonProps }) {
  return (
    <span className="shadow rounded-md">
      <button
        className="font-display font-extrabold inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        {...buttonProps}
      >
        {children}
      </button>
    </span>
  );
}

export function ButtonLargeSecondary({ children, ...buttonProps }) {
  return (
    <span className="shadow rounded-md">
      <button
        className="font-display font-extrabold inline-flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
        {...buttonProps}
      >
        {children}
      </button>
    </span>
  );
}