import React from 'react';
import PropTypes from 'prop-types';

const CloudRain = props => {
  const { color = '', size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      {...otherProps}
    >
      <g
        clip-path="url(#clip0_0_131)"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#000"
      >
        <path d="M16 12a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z"></path>
        <path d="M8 12a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z"></path>
        <path d="M12 14a1 1 0 011 1v8a1 1 0 11-2 0v-8a1 1 0 011-1z"></path>
        <path d="M8.082.047A9 9 0 0117.48 6h.522a6 6 0 012.4 11.496 1 1 0 11-.802-1.832A4 4 0 0017.999 8H16.74a1 1 0 01-.968-.75 7 7 0 10-11.148 7.219 1 1 0 01-1.248 1.562A9 9 0 018.082.047z"></path>
      </g>
      <defs>
        <clipPath id="clip0_0_131">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudRain.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudRain;
