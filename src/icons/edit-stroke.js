import React from 'react';
import PropTypes from 'prop-types';

const EditStroke = props => {
  const { color = '#7C70FF', size = 24, ...otherProps } = props;
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
        d="M20.363 3H3.637a1 1 0 00-.991 1.128l1.779 13.79a1 1 0 00.62.8l6.584 2.633a1 1 0 00.742 0l6.584-2.633a1 1 0 00.62-.8l1.78-13.79A1 1 0 0020.363 3z"
        fill="currentColor"
      ></path>
      <path
        d="M20.363 3H3.637a1 1 0 00-.991 1.128l1.779 13.79a1 1 0 00.62.8l6.584 2.633a1 1 0 00.742 0l6.584-2.633a1 1 0 00.62-.8l1.78-13.79A1 1 0 0020.363 3z"
        fill="url(#paint0_radial_58_183)"
        fill-opacity=".2"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.745 7.345A1 1 0 018.5 7H16a1 1 0 110 2H9.653l.214 1.5H15.5a1 1 0 01.992 1.124l-.5 4a1 1 0 01-.676.825l-3 1a1 1 0 01-.632 0l-3-1A1 1 0 018 15.5v-1a1 1 0 112 0v.28l2 .666 2.086-.695.281-2.251H9a1 1 0 01-.99-.859l-.5-3.5a1 1 0 01.235-.796z"
        fill="currentColor"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.745 7.345A1 1 0 018.5 7H16a1 1 0 110 2H9.653l.214 1.5H15.5a1 1 0 01.992 1.124l-.5 4a1 1 0 01-.676.825l-3 1a1 1 0 01-.632 0l-3-1A1 1 0 018 15.5v-1a1 1 0 112 0v.28l2 .666 2.086-.695.281-2.251H9a1 1 0 01-.99-.859l-.5-3.5a1 1 0 01.235-.796z"
        fill="#fff"
        fill-opacity=".8"
      ></path>
      <defs>
        <radialGradient
          id="paint0_radial_58_183"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(7.15 -13.27083 14.47014 7.79616 5.4 20.288)"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

EditStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditStroke.defaultProps = {
  color: '#7C70FF',
  size: '24'
};

export default EditStroke;
