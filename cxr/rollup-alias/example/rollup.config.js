import { alias } from 'rollup-alias'

export default {
  input: './index.js',
  output: {
    file: './dist/index.js',
    format: 'es'
  },
  plugins: [
    alias({
      // entries: {
      //   '&': './utils'
      // }
      entries: [
        {
          find: '&',
          replacement: './utils'
        }
      ]
    })
  ]
}
