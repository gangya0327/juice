module.exports = {
  rules: {
    get: {
      create(context) {
        console.log('hello eslint plugin get2')
        // console.log('context :>> ', context);
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name
            if (!functionName.startsWith('get')) {
              // context.report({
              //   node,
              //   message: `${functionName} must start with get`
              // })
              return;
            }

            const blockStatementBody = node.body.body

            const lastNode = blockStatementBody[blockStatementBody.length - 1]
            if (!lastNode || lastNode.type !== 'ReturnStatement') {
              context.report({
                node,
                message: `${functionName} must return a value`
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
