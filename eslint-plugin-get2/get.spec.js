const { RuleTester } = require('eslint')
const { rules } = require('./index')

// console.log('RuleTester :>> ', RuleTester)

const ruleTester = new RuleTester()

ruleTester.run('get', rules.get, {
  valid: [{ name: 'success', code: 'function getName() { return "" }' }],
  invalid: []
})
