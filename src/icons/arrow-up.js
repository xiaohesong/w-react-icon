import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = props => {
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
        d="M12.707 4.293a1 1 0 00-1.414 0l-7 7a1 1 0 101.414 1.414L11 7.414V19a1 1 0 102 0V7.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z"
        fill="#000"
      ></path>
    </svg>
  );
};

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUp;
