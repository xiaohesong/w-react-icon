import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = props => {
  const { color, size = 24, ...otherProps } = props;
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
        d="M7 4a1 1 0 00-1 1v14.057l5.419-3.87a1 1 0 011.162 0L18 19.056V5a1 1 0 00-1-1H7zM4.879 2.879A3 3 0 017 2h10a3 3 0 013 3v16a1 1 0 01-1.581.814L12 17.229l-6.419 4.585A1 1 0 014 21V5a3 3 0 01.879-2.121z"
        fill="#000"
      ></path>
    </svg>
  );
};

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bookmark;
