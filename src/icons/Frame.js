import React from 'react';
import PropTypes from 'prop-types';

const Frame = props => {
  const { color, size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
    >
      <path
        d="M12.18 21.991H3.385c-.763 0-1.384-.62-1.384-1.384v-7.819h10.18v9.203z"
        fill="#0FBD91"
      ></path>
      <path
        d="M12.18 21.991H3.385c-.763 0-1.384-.62-1.384-1.384v-7.819h10.18v9.203z"
        fill="#fff"
        fill-opacity=".4"
      ></path>
      <path
        d="M12.18 21.991H3.385c-.763 0-1.384-.62-1.384-1.384v-7.819h10.18v9.203z"
        fill="url(#paint0_linear_45_557)"
        fill-opacity=".4"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.384 21.791h8.597v-8.803H2.2v7.62c0 .652.531 1.183 1.184 1.183zm8.797.2v-9.203H2v7.82c0 .763.62 1.383 1.384 1.383h8.797z"
        fill="#fff"
        fill-opacity=".4"
      ></path>
      <path
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"
        fill="#0FBD91"
      ></path>
      <path
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z"
        fill="url(#paint1_linear_45_557)"
        fill-opacity=".2"
      ></path>
      <path
        d="M6 10a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z"
        fill="#0FBD91"
      ></path>
      <path
        d="M6 10a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z"
        fill="#fff"
        fill-opacity=".6"
      ></path>
      <path
        d="M10 8a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1z"
        fill="#0FBD91"
      ></path>
      <path
        d="M10 8a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1z"
        fill="#fff"
        fill-opacity=".8"
      ></path>
      <path
        d="M14 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
        fill="#0FBD91"
      ></path>
      <path
        d="M14 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
        fill="#fff"
        fill-opacity=".6"
      ></path>
      <path
        d="M18 11a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
        fill="#0FBD91"
      ></path>
      <path
        d="M18 11a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
        fill="#fff"
        fill-opacity=".6"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_45_557"
          x1="2"
          y1="22"
          x2="5"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_45_557"
          x1="4.504"
          y1="20.43"
          x2="18.676"
          y2="7.45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

Frame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Frame.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Frame;
