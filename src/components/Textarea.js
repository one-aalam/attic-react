import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutoSize from 'react-textarea-autosize';

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    minRows: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    invalid: PropTypes.bool,
    message: PropTypes.string,
    onChange: PropTypes.func,
};

const defaultProps = {
    className: undefined,
    label: undefined,
    minRows: 2,
    value: undefined,
    invalid: false,
    message: undefined,
    onChange: () => {},
};

const Textarea = React.forwardRef(function Textarea({ label, invalid, message, className, filter, onChange, ...textAreaProps }, ref ) {

    const handleChange = event => {
        onChange(event.target.value, event);
    };

    return(
        <div className="mb-4">
             { label && <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">{label}</label>}
            <div className="w-full inline-block">
                <TextareaAutoSize
                    className={
                        (className ? className : "")  +
                        (invalid ? 'border-red-500 ' : 'border-indigo-200 ') +
                        "appearance-none block w-full h-full bg-indigo-100 text-gray-700 hover:bg-white hover:border-indigo-300 focus:border-indigo-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    }
                    {...textAreaProps}
                    style={{ transition: "all .15s ease" }}
                    onChange={handleChange}
                    inputRef={ref || undefined}
                />
            </div>
            { message && <p className={(invalid ? "text-red-500" : "") + " text-xs italic mt-1"}>{message}</p>}
        </div>
    );
});

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
