const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
  }
  const fillAttrs = {
    // fill: 'color',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    // fill: 'none',
    // stroke: 'color',
    // strokeWidth: 2,
    // strokeLinecap: 'round',
    // strokeLinejoin: 'round',
    otherProps: '...otherProps'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const {findKeyByValue} = require('./utils')
const cheerio = require('cheerio')
const regenerateCode = (svgCode) => {
  const $ = cheerio.load(svgCode);
  const svg = $('svg')
  return {content: $('body').children().html(), attr: svg.attr()}
}

const getElementCode = (ComponentName, attrs, svgCode, {cfMap}) => {
  const result = regenerateCode(svgCode)
  const defaultColor = findKeyByValue(cfMap, 'currentColor') || ''
  let attributes = {...result.attr, style: "width: '1em', height: '1em',fontSize: size"}
  if(defaultColor) {
    attributes = {...attributes, color: 'color'}
  }

  const svgAttributes = Object.entries(attributes).map(([k,v]) => {
      if(k === 'style') {
        return `${k}={{${v}}}`
      }
      if(k === 'color') {
        return `${k}={${v}}`
      }
      return `${k}="${v}"`
  }).join(' ')

  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = (props) => {
      const { color = '${defaultColor}', size = 24, ...otherProps } = props;
      return (
        <svg ${svgAttributes} {...otherProps} >
          ${result.content}
        </svg>
      )
    };

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${ComponentName}.defaultProps = {
      color: 'currentColor',
      size: '24',
    }

    export default ${ComponentName}
  `
}

module.exports = { getAttrs, getElementCode }
