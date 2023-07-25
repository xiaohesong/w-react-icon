import React from 'react';
import PropTypes from 'prop-types';

const Bold = props => {
  const { color, size = 24, ...otherProps } = props;
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
        d="M5 4a1 1 0 011-1h8a5 5 0 110 10H6a1 1 0 01-1-1V4zm2 1v6h7a3 3 0 000-6H7z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12a1 1 0 011-1h9a5 5 0 110 10H6a1 1 0 01-1-1v-8zm2 1v6h8a3 3 0 000-6H7z"
        fill="#000"
      ></path>
    </svg>
  );
};

Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bold.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bold;
