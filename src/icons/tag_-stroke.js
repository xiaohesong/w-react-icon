import React from 'react';
import PropTypes from 'prop-types';

const TagStroke = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.879 2.879A3 3 0 017 2h10a3 3 0 013 3v16a1 1 0 01-1.581.814L12 17.229l-6.419 4.585A1 1 0 014 21V5a3 3 0 01.879-2.121z"
        fill="#000"
      ></path>
    </svg>
  );
};

TagStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TagStroke.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TagStroke;
