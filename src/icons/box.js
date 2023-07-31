import React from 'react';
import PropTypes from 'prop-types';

const Box = props => {
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
        d="M11.556 2.345h-.001l-7.998 4h-.002A1 1 0 003 7.24v9.527a1 1 0 00.55.9l7.997 3.999a1.001 1.001 0 00.896 0l8-4 .002-.001A1 1 0 0021 16.77V7.24a1 1 0 00-.555-.894l-.002-.001-7.998-4a1 1 0 00-.89 0zm1.334-.895l.445-.895a3 3 0 00-2.67 0h-.002l-7.998 4h-.001A3 3 0 001 7.24v9.517a3 3 0 001.65 2.696l.003.002 8 4a3 3 0 002.684 0l7.998-4h.001A3 3 0 0023 16.771V7.24a3 3 0 00-1.665-2.686l-7.998-4-.447.895z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.426 5.713a1 1 0 011.341-.447L12 9.882l9.233-4.616a1 1 0 01.894 1.789l-9.68 4.84a1 1 0 01-.894 0l-9.68-4.84a1 1 0 01-.447-1.342z"
        fill="#000"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 10a1 1 0 011 1v11.76a1 1 0 01-2 0V11a1 1 0 011-1z"
        fill="#000"
      ></path>
    </svg>
  );
};

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Box.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Box;
