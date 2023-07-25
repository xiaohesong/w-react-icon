import React from 'react';
import PropTypes from 'prop-types';

const ChevronsUp = props => {
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
        d="M11.293 5.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.293 12.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z"
        fill="#000"
      ></path>
    </svg>
  );
};

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronsUp;
