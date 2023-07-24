import React from 'react';
import PropTypes from 'prop-types';

const Edit = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        d="M20.363 3H3.637a1 1 0 00-.991 1.128l1.779 13.79a1 1 0 00.62.8l6.584 2.633a1 1 0 00.742 0l6.584-2.633a1 1 0 00.62-.8l1.78-13.79A1 1 0 0020.363 3z"
        fill="#7C70FF"
      ></path>
      <path
        d="M20.363 3H3.637a1 1 0 00-.991 1.128l1.779 13.79a1 1 0 00.62.8l6.584 2.633a1 1 0 00.742 0l6.584-2.633a1 1 0 00.62-.8l1.78-13.79A1 1 0 0020.363 3z"
        fill="url(#paint0_radial_111_190)"
        fillOpacity=".2"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.745 7.345A1 1 0 018.5 7H16a1 1 0 110 2H9.653l.214 1.5H15.5a1 1 0 01.992 1.124l-.5 4a1 1 0 01-.676.825l-3 1a1 1 0 01-.632 0l-3-1A1 1 0 018 15.5v-1a1 1 0 112 0v.28l2 .666 2.086-.695.281-2.251H9a1 1 0 01-.99-.859l-.5-3.5a1 1 0 01.235-.796z"
        fill="#7C70FF"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.745 7.345A1 1 0 018.5 7H16a1 1 0 110 2H9.653l.214 1.5H15.5a1 1 0 01.992 1.124l-.5 4a1 1 0 01-.676.825l-3 1a1 1 0 01-.632 0l-3-1A1 1 0 018 15.5v-1a1 1 0 112 0v.28l2 .666 2.086-.695.281-2.251H9a1 1 0 01-.99-.859l-.5-3.5a1 1 0 01.235-.796z"
        fill="#fff"
        fillOpacity=".8"
      ></path>
      <defs>
        <radialGradient
          id="paint0_radial_111_190"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(7.15 -13.27083 14.47014 7.79616 5.4 20.288)"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

Edit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Edit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Edit;
