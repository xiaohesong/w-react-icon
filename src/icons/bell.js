import React from 'react';
import PropTypes from 'prop-types';

const Bell = props => {
  const { color = '', size = 24, ...otherProps } = props;
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ width: '1em', height: '1em', fontSize: size }}
      {...otherProps}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3a6 6 0 00-6 6v5a4 4 0 01-.536 2h13.072A4 4 0 0118 14V9a6 6 0 00-6-6zm10 13a2 2 0 01-2-2V9A8 8 0 004 9v5a2 2 0 01-2 2 1 1 0 100 2h20v-2zM9.768 20.135a1 1 0 011.367.363 1 1 0 001.73 0 1 1 0 011.73 1.004 3 3 0 01-5.19 0 1 1 0 01.363-1.367z"
        fill="#000"
      ></path>
    </svg>
  );
};

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bell;
