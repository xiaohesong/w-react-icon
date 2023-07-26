const Svgo = require('svgo');
const cheerio = require('cheerio')
const { findKeyByValue } = require('./utils')

/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}


/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */

function optimize(svg, cfMap) {
  console.log('woqu', cfMap)
  let replaceValue = ''
  if(Object.keys(cfMap).length) {
    replaceValue = findKeyByValue(cfMap, 'currentColor')
  }
  console.log('replaceValue is', replaceValue)

  const plugins = [
    { convertShapeToPath: false },
    { mergePaths: false },
    { removeViewbox: false },
    { removeDimensions: true },
    // 改变色值
    replaceValue && { convertColors: {currentColor: new RegExp(replaceValue)} },
    // { removeAttrs: { attrs: '(fill|stroke.*)' } },
    { removeTitle: true },
  ].filter(Boolean);
  const svgo = new Svgo({
    plugins
  });

  return new Promise(resolve => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $('body').children().html();
}

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg, {cfMap}) {
  const optimized = await optimize(svg, cfMap)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => {
      return svg.replace(/;/g, '')
    })
    // .then(removeSVGElement)
    // .then(svg => svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`))
  return optimized;
}

module.exports = processSvg;
