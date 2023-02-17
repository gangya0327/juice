import { Plugin } from 'rollup'

export default function alias(): Plugin {
  return {
    name: 'alias',
    resolveId(source: string) {
      console.log('alias - source =>', source)
      return source
    }
  }
}
