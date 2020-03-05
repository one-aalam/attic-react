import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutoSize from 'react-textarea-autosize';
import Label from './Label';


const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    muteLabel: PropTypes.bool,
    required: PropTypes.bool,
    minRows: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    invalid: PropTypes.bool,
    message: PropTypes.string,
    onChange: PropTypes.func,
};

const defaultProps = {
    className: undefined,
    label: undefined,
    muteLabel: false,
    required: false,
    minRows: 2,
    value: undefined,
    invalid: false,
    message: undefined,
    onChange: () => {},
};

const Textarea = React.forwardRef(function Textarea({id, label, invalid, message, className, filter, onChange, muteLabel, required,  ...textAreaProps }, ref ) {

    const handleChange = event => {
        onChange(event.target.value, event);
    };

    return(
        <div className="mb-4">
             { label && <Label label={label} htmlFor={id} muted={muteLabel} required={required} />}
            <div className="w-full inline-block">
                <TextareaAutoSize
                    htmlId={id}
                    className={
                        (className ? className : "")  +
                        (invalid ? 'border-red-500 ' : 'border-gray-200 ') +
                        "appearance-none block w-full h-full text-gray-700 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 focus:border-indigo-400 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    }
                    {...textAreaProps}
                    style={{ transition: "all .15s ease" }}
                    onChange={handleChange}
                    inputRef={ref || undefined}
                />
            </div>
            { message && <p className={(invalid ? "text-red-500 font-bold " : "text-gray-800 ") + "pl-1 font-light text-xs mt-1"}>{message}</p>}
        </div>
    );
});

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
