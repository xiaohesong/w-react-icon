import React from 'react';
import PropTypes from 'prop-types';

const Battery = props => {
  const { color, size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1H3zM0 8a3 3 0 013-3h14a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V8z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
        fill="#000"
      ></path>
    </svg>
  );
};

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Battery.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Battery;
