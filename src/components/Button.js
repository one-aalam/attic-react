import React from "react";

const Button = ({ children, size, secondary, display, upper, ...buttonProps }) => {
  return (
      <button
        className={
          (getBtnSize(size)) +
          (display ? "font-display font-extrabold " : "font-body font-medium ") +
          (upper ? "uppercase " : "") +
          (secondary
            ? "text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-200 "
            : "text-white bg-indigo-600 hover:bg-indigo-500 "
          ) +
        "inline-flex items-center border border-transparent rounded-md shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        }
        {...buttonProps}
      >
        {children}
      </button>
  );
}

export const WhiteButton = ({ children, size, display, upper, ...buttonProps }) => {
  return (
      <button
        className={
          (getBtnSize(size)) +
          (display ? "font-display font-extrabold " : "font-body font-medium ") +
          (upper ? "uppercase " : "") +
        "inline-flex items-center text-gray-700 bg-white hover:text-gray-800 border border-gray-100 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        }
        {...buttonProps}
      >
        {children}
      </button>
  );
}

export const OutlineButton = ({ children, size, display, upper, ...buttonProps }) => {
  return (
      <button
        className={
          (getBtnSize(size)) +
          (display ? "font-display font-extrabold " : "font-body font-medium ") +
          (upper ? "uppercase " : "") +
        "inline-flex items-center text-indigo-600 bg-white hover:text-white hover:bg-indigo-600 border border-indigo-600 rounded-md shadow-sm hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        }
        {...buttonProps}
      >
        {children}
      </button>
  );
}

const getBtnSize = (size) => {
  switch(size) {
    case 'sm':
      return "px-2 py-1 text-xs ";
    case 'md':
      return "px-4 py-2 text-sm leading-5 ";
    case 'xl':
      return "px-8 py-3 md:py-4 md:text-xl md:px-10 leading-5 "
    case 'lg':
    default:
      return "px-6 py-2 md:py-3 md:text-lg md:px-8 "
  }
}


export default Button;