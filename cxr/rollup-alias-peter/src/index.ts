import { Plugin } from 'rollup'

interface AliasOptions {
  entries:
    | {
        [key: string]: string // 对象格式
      }
    | { find: string | RegExp; replacement: string }[] // 数组格式
}

export default function alias(options: AliasOptions): Plugin {
  const entries = normalizeEntries(options.entries)
  return {
    name: 'alias',
    resolveId(source: string) {
      const entry = entries.find((e) => {
        return e.match(source)
      })
      if (!entry) return source
      return entry.replace(source)
    }
  }
}

function normalizeEntries(entries: AliasOptions['entries']) {
  if (Array.isArray(entries)) {
    return entries.map(({ find, replacement }) => {
      return new Entry(find, replacement)
    })
  } else {
    return Object.keys(entries).map((key) => {
      return new Entry(key, entries[key])
    })
  }
}

class Entry {
  constructor(private find: string | RegExp, private replacement: string) {}
  match(filePath: string) {
    if (typeof this.find === 'string') {
      return filePath.startsWith(this.find)
    } else {
      return this.find.test(filePath)
    }
  }
  replace(filePath: string) {
    return filePath.replace(this.find, this.replacement) + '.js'
  }
}
