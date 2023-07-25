import React from 'react';
import PropTypes from 'prop-types';

const NavGuide = props => {
  const { color, size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
    >
      <path
        d="M19 4.391H5a1 1 0 00-1 1v1.42a1 1 0 00.234.642l4.433 5.286v7.652L15.333 19v-6.26l4.433-5.287A1 1 0 0020 6.81V5.391a1 1 0 00-1-1z"
        fill="url(#paint0_linear_45_749)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_45_749"
          x1="12"
          y1="4.391"
          x2="12"
          y2="20.391"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BCBCFC"></stop>
          <stop offset="1" stop-color="#000016"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

NavGuide.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NavGuide.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NavGuide;
