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

const jsxAttribute = ['xmlns:xlink', 'xlink:href'];

const cheerio = require('cheerio')
const { objectWithoutKey, findKeyByValue, convertedStyle, replaceAttributesWithJSX, replaceImageData } = require('./utils')

const regenerateCode = (svgCode) => {
  const $ = cheerio.load(svgCode);
  const svg = $('svg')
  return {content: $('body').children().html(), attr: svg.attr()}
}

const getElementCode = (ComponentName, attrs, svgCode, {cfMap}) => {
  const result = regenerateCode(svgCode)
  const defaultColor = cfMap['currentColor'] || ''
  const resetObj = objectWithoutKey(cfMap, 'currentColor')
  const replaceValues = Object.values(resetObj).map(v => `"${v}"`).join('|')
  let newContent = result.content
  if(replaceValues.length) {
    const replaceRegex = new RegExp(replaceValues, 'g')
    newContent = result.content.replace(replaceRegex, (matched) => {
      matched = matched.replace(/"/g, '')
      const key = findKeyByValue(resetObj, matched)
      return `{${key}}`
    })
  }

  let resetPropTypes = {}
  Object.keys(resetObj).map((key) => {
    resetPropTypes = {...resetPropTypes, [key]: 'PropTypes.string'}
  })

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

  let resetPropsTemplate = ''
  if(replaceValues) {
    const defaultValues = Object.keys(resetObj).map(k => `${k}="${resetObj[k]}"`).join(', ')
    resetPropsTemplate = `const { ${defaultValues} } = props`
  }

  // 转换style
  let content = replaceValues ? newContent : result.content
  if(content.includes("style=")) {
    content = convertedStyle(content)
  }

  content = replaceAttributesWithJSX(content, jsxAttribute)
  // content = replaceImageData(content)
  
  return `
    import React from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = (props) => {
      const { color = '${defaultColor}', size = 24, ...otherProps } = props;
      ${resetPropsTemplate}

      return (
        <svg ${svgAttributes} {...otherProps} >
          ${content}
        </svg>
      )
    };

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      ${Object.entries(resetPropTypes).map(([k,v]) => `${k}: ${v}`).join(',\n')}
    }

    ${ComponentName}.defaultProps = {
      color: "${defaultColor ? defaultColor : 'currentColor'}",
      size: '24',
      ${Object.entries(resetObj).map(([k,v]) => `${k}: "${v}"`).join(',\n')}
    }

    export default ${ComponentName}
  `
}

module.exports = { getAttrs, getElementCode }
