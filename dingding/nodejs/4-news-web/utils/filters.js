const template = require('art-template')

template.defaults.imports.rankingFilter = (value) => {
  return ['first', 'second', 'third'][value] || ''
}

template.defaults.imports.dateFormat = (value) => {
  const d = new Date(value)
  return (
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getDate() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes() +
    ':' +
    d.getSeconds()
  )
}
