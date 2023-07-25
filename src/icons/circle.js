import React from 'react';
import PropTypes from 'prop-types';

const Circle = props => {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        fill="#000"
      ></path>
    </svg>
  );
};

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Circle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Circle;
