module.exports = {
  rules: {
    get: {
      meta: {
        fixable: 'code'
      },
      create(context) {
        console.log('hello eslint plugin get2')
        const isFix = context.options[0]
        // console.log('context :>> ', context);
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name
            if (!functionName.startsWith('get')) {
              // context.report({
              //   node,
              //   message: `${functionName} must start with get`
              // })
              return
            }

            const blockStatementBody = node.body.body

            const lastNode = blockStatementBody[blockStatementBody.length - 1]
            if (!lastNode || lastNode.type !== 'ReturnStatement') {
              context.report({
                node,
                message: `${functionName} must return a value`,
                fix(fixer) {
                  if (isFix === false) return fixer.insertTextAfter(node, '')
                  // console.log('node :>> ', node)
                  const endPoint = node.range[1]
                  return fixer.replaceTextRange([endPoint - 1, endPoint], '  return ""\n}')
                }
              })
              return
            }

            // if (blockStatementBody.length === 0) {
            //   context.report({
            //     node,
            //     message: `${functionName} must return a value`
            //   })
            // }
          }
        }
      }
    }
  }
}
