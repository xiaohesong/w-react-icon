import React from 'react';
import PropTypes from 'prop-types';

const Award = props => {
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
        clip-path="url(#clip0_0_38)"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#000"
      >
        <path d="M12 2a6 6 0 100 12 6 6 0 000-12zM4 8a8 8 0 1116 0A8 8 0 014 8z"></path>
        <path d="M15.659 12.889a1 1 0 011.122.86l1.21 9.12a1 1 0 01-1.506.989L12 21.166l-4.485 2.692a1 1 0 01-1.506-.99l1.21-9.11a1 1 0 011.982.264l-.937 7.053 3.222-1.933a1 1 0 011.028 0l3.222 1.933-.937-7.063a1 1 0 01.86-1.123z"></path>
      </g>
      <defs>
        <clipPath id="clip0_0_38">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Award.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Award.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Award;
