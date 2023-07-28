import React from 'react';
import PropTypes from 'prop-types';

const Jianbian = props => {
  const { color = '#F8BBBB', size = 24, ...otherProps } = props;
  const { sec = '#0E4BEA' } = props;

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      color={color}
      {...otherProps}
    >
      <g clip-path="url(#clip0_353_188)">
        <mask
          id="a"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M24 0H0v24h24V0z" fill="#fff"></path>
        </mask>
        <g mask="url(#a)">
          <path
            d="M16 0H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8z"
            fill="url(#paint0_linear_353_188)"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_353_188"
          x1="12"
          y1="0"
          x2="24"
          y2="23.143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="currentColor"></stop>
          <stop offset="1" stop-color={sec} stop-opacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_353_188">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Jianbian.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sec: PropTypes.string
};

Jianbian.defaultProps = {
  color: '#F8BBBB',
  size: '24',
  sec: '#0E4BEA'
};

export default Jianbian;
