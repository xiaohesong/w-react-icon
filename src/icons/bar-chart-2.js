import React from 'react';
import PropTypes from 'prop-types';

const BarChart2 = props => {
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
        d="M18 9a1 1 0 011 1v10a1 1 0 11-2 0V10a1 1 0 011-1z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3a1 1 0 011 1v16a1 1 0 11-2 0V4a1 1 0 011-1z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 13a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
        fill="#000"
      ></path>
    </svg>
  );
};

BarChart2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BarChart2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BarChart2;
