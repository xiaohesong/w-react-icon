import React from 'react';
import PropTypes from 'prop-types';

const Cloud = props => {
  const { color = '', size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      {...otherProps}
    >
      <g clip-path="url(#clip0_0_121)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.873 3.559A9 9 0 0117.479 9H18a6 6 0 010 12H9A9 9 0 01.01 12.518L0 12.5l.007-.011a8.999 8.999 0 015.862-8.93h.004zm.69 1.876a7.007 7.007 0 00-3.105 2.28A7 7 0 008.977 19H18a4 4 0 100-8h-1.26a1 1 0 01-.968-.75 7 7 0 00-9.208-4.815z"
          fill="#000"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_0_121">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Cloud;
