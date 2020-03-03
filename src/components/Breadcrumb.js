import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Breadcrumbs = ({ items }) => (
  <div className="text-gray-500 text-xl flex">
    {items.map((item, index) => (
      <React.Fragment key={item}>
        {index !== 0 && <div className="relative my-0 mx-2 text-base" style={{top: 4}}>/</div>}
        {item}
      </React.Fragment>
    ))}
  </div>
);

Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
