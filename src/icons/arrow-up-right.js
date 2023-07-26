import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpRight = props => {
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
        d="M7 6a1 1 0 000 2h7.513l-8.22 8.293a1 1 0 101.414 1.414L16 9.341V17a1 1 0 102 0V7a1 1 0 00-1-1H7z"
        fill="#000"
      ></path>
    </svg>
  );
};

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpRight;
