import React from 'react';
import PropTypes from 'prop-types';

const Market2 = props => {
  const { color = '#08ABFC', size = 24, ...otherProps } = props;

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      color={color}
      {...otherProps}
    >
      <path
        d="M7.123 14l-4.199 2.143c-.565.289-.565 1.234 0 1.523l7.956 4.06a2.43 2.43 0 002.24 0l7.956-4.06c.566-.289.566-1.234 0-1.523L16.877 14l-3.757 1.918a2.43 2.43 0 01-2.24 0L7.123 14z"
        fill="currentColor"
      ></path>
      <path
        d="M7.123 14l-4.199 2.143c-.565.289-.565 1.234 0 1.523l7.956 4.06a2.43 2.43 0 002.24 0l7.956-4.06c.566-.289.566-1.234 0-1.523L16.877 14l-3.757 1.918a2.43 2.43 0 01-2.24 0L7.123 14z"
        fill="#fff"
        fill-opacity=".6"
      ></path>
      <path
        d="M7.123 14l-4.199 2.143c-.565.289-.565 1.234 0 1.523l7.956 4.06a2.43 2.43 0 002.24 0l7.956-4.06c.566-.289.566-1.234 0-1.523L16.877 14l-3.757 1.918a2.43 2.43 0 01-2.24 0L7.123 14z"
        fill="url(#paint0_linear_45_602)"
        fill-opacity=".4"
      ></path>
      <path
        d="M2.924 11.253l7.956-3.984a2.472 2.472 0 012.24 0l7.956 3.984c.566.283.566 1.21 0 1.494l-7.956 3.985a2.472 2.472 0 01-2.24 0l-7.956-3.985c-.565-.283-.565-1.21 0-1.494z"
        fill="currentColor"
      ></path>
      <path
        d="M2.924 11.253l7.956-3.984a2.472 2.472 0 012.24 0l7.956 3.984c.566.283.566 1.21 0 1.494l-7.956 3.985a2.472 2.472 0 01-2.24 0l-7.956-3.985c-.565-.283-.565-1.21 0-1.494z"
        fill="#fff"
        fill-opacity=".4"
      ></path>
      <path
        d="M2.924 11.253l7.956-3.984a2.472 2.472 0 012.24 0l7.956 3.984c.566.283.566 1.21 0 1.494l-7.956 3.985a2.472 2.472 0 01-2.24 0l-7.956-3.985c-.565-.283-.565-1.21 0-1.494z"
        fill="url(#paint1_linear_45_602)"
        fill-opacity=".2"
      ></path>
      <path
        d="M2.924 6.253l7.956-3.984a2.472 2.472 0 012.24 0l7.956 3.984c.566.283.566 1.21 0 1.494l-7.956 3.985a2.472 2.472 0 01-2.24 0L2.924 7.747c-.565-.283-.565-1.21 0-1.494z"
        fill="currentColor"
      ></path>
      <path
        d="M2.924 6.253l7.956-3.984a2.472 2.472 0 012.24 0l7.956 3.984c.566.283.566 1.21 0 1.494l-7.956 3.985a2.472 2.472 0 01-2.24 0L2.924 7.747c-.565-.283-.565-1.21 0-1.494z"
        fill="url(#paint2_linear_45_602)"
        fill-opacity=".2"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_45_602"
          x1="12"
          y1="12.877"
          x2="12"
          y2="21.768"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_45_602"
          x1="12"
          y1="7"
          x2="12"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_45_602"
          x1="12"
          y1="2"
          x2="12"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

Market2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Market2.defaultProps = {
  color: '#08ABFC',
  size: '24'
};

export default Market2;
