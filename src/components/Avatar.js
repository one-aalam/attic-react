import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    bgCls: PropTypes.string,
    size: PropTypes.string,
    round: PropTypes.bool,
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
    border: PropTypes.bool
}

const Avatar = ({ bgCls, border, size, round, name, src }) => (
    <div className={
        (getSizes(size) + " ") +
        (round ? "rounded-full " : "rounded ") +
        (bgCls ? bgCls + " " :  "bg-magenta-500 ") +
        (border ? "border-200 " : "") +
        "w-6 h-6 flex items-center justify-center uppercase text-white font-medium shadow"}
        style={ border ? { border: 8, borderColor: 'currentColor' } : {}} >
        { src ? <img className={(round ? "rounded-full " : "rounded ") + "w-full h-full overflow-hidden"} src={src} alt={name} /> : (
            name && typeof name === "string" && name.length ? name.charAt(0) : ""
        )}
    </div>
);

const sizes = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16 text-xl',
    lg: 'text-lg h-24 w-24 text-2xl'
};

const getSizes = (size) => sizes[size] || sizes.md;

Avatar.propTypes = propTypes;

export default Avatar;