const template = require('art-template')

template.defaults.imports.rankingFilter = (value) => {
  return ['first', 'second', 'third'][value] || ''
}
