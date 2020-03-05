import React from 'react';
import PropTypes from 'prop-types';

function Label({ label, required, muted, ...defaultProps }) {
  return (
    <label className={(muted ? "text-muted " : "") + "block font-display tracking-wide text-gray-700 text-sm font-bold mb-2"} {...defaultProps}>
      {label} { required && <span className="text-gray-600"> *</span> }
    </label>
  )
}

Label.propTypes = {
  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk if label is for an input that's required */
  required: PropTypes.bool,

  /** Hide label from the bare eyes, if it's not supposed to be viewed */
  muted: PropTypes.bool
};

export default Label;