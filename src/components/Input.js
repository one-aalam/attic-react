import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
    invalid: PropTypes.bool,
    message: PropTypes.string,
    filter: PropTypes.instanceOf(RegExp),
    onChange: PropTypes.func,
};

const defaultProps = {
    className: undefined,
    value: undefined,
    icon: undefined,
    invalid: false,
    message: undefined,
    filter: undefined,
    onChange: () => {},
};

const Input = React.forwardRef(function Input({ icon , invalid, message, className, filter, onChange, ...inputProps }, ref ) {

    const handleChange = event => {
        if (!filter || filter.test(event.target.value)) {
          onChange(event.target.value, event);
        }
    };

    return(
        <div className="mb-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                username
            </label>
            <div className="w-full h-12 inline-block relative">
                { icon && <span className="absolute w-10 h-10" style={{ top: 10, left: 10}}>{icon}</span> }
                <input
                    className={
                        (className ? className : "")  +
                        (icon ? 'pl-12 ' : '') +
                        (invalid ? 'border-red-500 ' : 'border-indigo-200 ') +
                        "appearance-none block w-full h-full bg-indigo-100 text-gray-700 hover:bg-white hover:border-indigo-300 focus:border-indigo-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    }
                    {...inputProps}
                    style={{ transition: "all .15s ease" }}
                    onChange={handleChange}
                    ref={ref}
                />
            </div>
            { message && <p className={(invalid ? "text-red-500" : "") + " text-xs italic mt-1"}>{message}</p>}
        </div>
    );
});

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
