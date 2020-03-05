import React from 'react';
import PropTypes from 'prop-types';

const getColor = (percent) => {
    if (percent === 100) return 'bg-green-500';
    return percent > 50 ? 'bg-green-200' : 'bg-red-500';
}

const getWidthAsPercentOfTotalWidth = (width, percent) => parseInt(width * (percent / 100), 10);

const ProgressBar = ({percent, width, height}) => {
    return (
      <div className="bg-gray-100 border border-gray-200" style={{width: width}}>
        <div className={`${getColor(percent)}`} style={{
          width: getWidthAsPercentOfTotalWidth(width, percent),
          height
        }} />
      </div>
    );
}

ProgressBar.propTypes = {
  /** % of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;