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
    const regex = /(#\w+)\s*:\s*(\w+)/; // 匹配键值对，假设键是以#开头的字符串，值是单词字符
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

module.exports = {
  parseName,
  getCfContent,
  generateCfMap
};
