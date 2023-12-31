import React from 'react';
import PropTypes from 'prop-types';

const Bluetooth = props => {
  const { color = '', size = 24, ...otherProps } = props;

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      {...otherProps}
    >
      <g clip-path="url(#clip0_0_61)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.617.076a1 1 0 011.09.217l5.5 5.5a1 1 0 010 1.414L13.414 12l4.793 4.793a1 1 0 010 1.414l-5.5 5.5A1 1 0 0111 23v-8.586l-3.793 3.793a1 1 0 11-1.414-1.414L10.586 12 5.793 7.207a1 1 0 011.414-1.414L11 9.586V1a1 1 0 01.617-.924zM13 14.414l3.086 3.086L13 20.586v-6.172zm0-4.828V3.414L16.086 6.5 13 9.586z"
          fill="#000"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_0_61">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bluetooth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bluetooth;
