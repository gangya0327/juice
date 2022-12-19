const { RuleTester } = require('eslint')
const { rules } = require('../index')

// console.log('RuleTester :>> ', RuleTester)

const ruleTester = new RuleTester()

ruleTester.run('get', rules.get, {
  valid: [{ name: '有返回', code: 'function getName() { return "" }' }],
  invalid: [
    {
      name: '内容为空',
      code: 'function getName() {}',
      output: 'function getName() {  return ""\n}',
      errors: [{ message: 'getName must return a value' }]
    },
    {
      name: '内容为空，不修复',
      options: [false],
      code: 'function getName() {}',
      output: 'function getName() {}',
      errors: [{ message: 'getName must return a value' }]
    },
    {
      name: '内容不为空，但无返回',
      code: 'function getName() { var name = "yml";}',
      output: 'function getName() { var name = "yml";  return ""\n}',
      errors: [{ message: 'getName must return a value' }]
    }
    // {
    //   name: '方法名不以get开头',
    //   code: 'function setName() { return "" }',
    //   errors: [{ message: 'setName must start with get' }]
    // }
  ]
})
