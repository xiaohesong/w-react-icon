const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split('-')
  const style = nameSlices[nameSlices.length - 1]
  return {
    name,
    componentName: upperCamelCase(name),
    style: style==='fill' || style==='stroke' ? style : defaultStyle
  }
}

const getCfContent = (description) => {
  const regex = /cf:\s*{([^}]+)}/; // 匹配'cf:'后面的花括号内容
  const match = description.match(regex);

  if (match) {
    const contentInBraces = match[1];
    return contentInBraces
  } else {
    return ''
  }
}

const generateCfMap = (descriptionContent) => {
  const ar = descriptionContent.split(',')
  const result = ar.reduce((acc, item) => {
    // const regex = /(#\w+)\s*:\s*(\w+)/; // 匹配键值对，假设键是以#开头的字符串，值是单词字符
    const regex = /([^:\s]+)\s*:\s*(.*)/; // 匹配键值对
    const match = item.match(regex);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      acc[key] = value;
    }
    return acc;
  }, {});
  return result
}

function findKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

const objectWithoutKey = (obj, k) => Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => key !== k)
);

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}
const convertedStyle = (svgCode) => svgCode.replace(/style="(.*?)"/g, (match, styleString) => {
  const styleObj = styleString.split(';').reduce((styleObj, style) => {
    const [key, value] = style.split(':');
    const camelCaseKey = toCamelCase(key);
    if (key && value) {
      styleObj[camelCaseKey.trim()] = value.trim();
    }
    return styleObj;
  }, {});

  return `style={${JSON.stringify(styleObj)}}`;
});


module.exports = {
  parseName,
  getCfContent,
  generateCfMap,
  findKeyByValue,
  objectWithoutKey,
  convertedStyle
};
