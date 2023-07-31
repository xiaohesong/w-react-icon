import React from 'react';
import PropTypes from 'prop-types';

const CheckCircle = props => {
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
        d="M15.663 3.773A9 9 0 1021 12v-.92a1 1 0 112 0V12A11.002 11.002 0 018.188 22.313a11 11 0 118.289-20.366 1 1 0 11-.814 1.827z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.707 3.293a1 1 0 010 1.414l-10 10.01a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L12 12.595l9.293-9.302a1 1 0 011.414 0z"
        fill="#000"
      ></path>
    </svg>
  );
};

CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckCircle;
