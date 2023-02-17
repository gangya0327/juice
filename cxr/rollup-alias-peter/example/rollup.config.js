import { defineConfig } from 'rollup'
import alias from 'rollup-alias-peter'

export default defineConfig({
  input: './index.js',
  output: {
    file: './dist/index.js',
    format: 'es'
  },
  plugins: [
    alias({
      entries: {
        '@': './utils',
        $: './components'
      }
    })
  ]
})
