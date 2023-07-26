import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = props => {
  const { color = '', size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      {...otherProps}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 6a1 1 0 00-1 1v10a1 1 0 102 0V9.34l8.293 8.367a1 1 0 001.414-1.414L9.487 8H17a1 1 0 100-2H7z"
        fill="#000"
      ></path>
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpLeft;
