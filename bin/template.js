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

const cheerio = require('cheerio')
const regenerateCode = (svgCode) => {
  const $ = cheerio.load(svgCode);
  const svg = $('svg')
  // console.log('attrus is', svg.attr())
  // svg.attr(`style`, "`width: 1em; height: 1em; font-size: ${size}`")
  // console.log('$ is', $('body').children().html())
  // return $('body').children().html();
  return {content: $('body').children().html(), attr: svg.attr()}
  // return svg.parent().html()
}

const getElementCode = (ComponentName, attrs, svgCode) => {
  const result = regenerateCode(svgCode)
  // const style: "`width: 1em; height: 1em; font-size: ${size}"
  const attributes = {...result.attr, style: "width: '1em', height: '1em',fontSize: size"}
  // console.log('attributes is', attributes)
  const svgAttributes = Object.entries(attributes).map(([k,v]) => {
      if(k === 'style') {
        return `${k}={{${v}}}`
      }
      return `${k}="${v}"`
  }).join(' ')

  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = (props) => {
      const { color, size = 24, ...otherProps } = props;
      return (
        <svg ${svgAttributes} >
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
