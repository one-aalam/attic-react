import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    muteLabel: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.node,
    invalid: PropTypes.bool,
    required: PropTypes.bool,
    message: PropTypes.string,
    filter: PropTypes.instanceOf(RegExp),
    onChange: PropTypes.func,
};

const defaultProps = {
    className: undefined,
    label: undefined,
    muteLabel: false,
    value: undefined,
    icon: undefined,
    invalid: false,
    required: false,
    message: undefined,
    filter: undefined,
    onChange: () => {},
};

const Input = React.forwardRef(function Input({ id, type, icon , label, invalid, required, message, className, filter, muteLabel, onChange, children, ...inputProps }, ref ) {

    const handleChange = event => {
        if (!filter || filter.test(event.target.value)) {
          onChange(event.target.value, event);
        }
    };
    console.log(type);
    return(
        <div className="mb-4">
            { label && <Label label={label} htmlFor={id} muted={muteLabel} required={required} />}
            <div className="w-full h-12 inline-block relative">
                { icon && <span className="absolute w-10 h-10 pointer-events-none text-gray-600" style={{ top: 14, left: 10}}>{icon({})}</span> }
                { children && <span className="absolute w-10 h-10 text-gray-600 right-0" style={{ top: 14 }}>{children}</span> }
                <input
                    id={id}
                    type={type || 'text'}
                    className={
                        (className ? className : "")  +
                        (icon ? 'pl-10 ' : '') +
                        (children ? 'pr-10 ' : '') +
                        (invalid ? 'border-red-500 ' : 'border-gray-200 focus:border-indigo-400 ') +
                        "appearance-none block w-full h-full text-gray-700 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 border focus:border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    }
                    {...inputProps}
                    style={{ transition: "all .15s ease" }}
                    onChange={handleChange}
                    ref={ref}
                />
            </div>
            { message && <p className={(invalid ? "text-red-500 font-bold " : "text-gray-800 ") + "pl-1 font-light text-xs mt-1"}>{message}</p>}
        </div>
    );
});

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
