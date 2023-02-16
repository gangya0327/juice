import { describe, it, expect } from 'vitest'
import { alias } from '.'

describe('alias is object', () => {
  it('匹配成功时替换内容', () => {
    const aliasObj: any = alias({
      entries: {
        '&': './utils',
        abc: './utils'
      }
    })
    expect(aliasObj.resolveId('&/add')).toBe('./utils/add.js')
    expect(aliasObj.resolveId('abc/add')).toBe('./utils/add.js')
  })

  it('匹配失败时不替换内容', () => {
    const aliasObj: any = alias({
      entries: {
        '&': './utils'
      }
    })
    expect(aliasObj.resolveId('!/add')).toBe('!/add')
  })
})

describe('alias is array', () => {
  it('匹配成功时替换内容', () => {
    const aliasObj: any = alias({
      entries: [
        {
          find: '&',
          replacement: './utils'
        },
        {
          find: 'abc',
          replacement: './utils'
        }
      ]
    })
    expect(aliasObj.resolveId('&/add')).toBe('./utils/add.js')
    expect(aliasObj.resolveId('abc/add')).toBe('./utils/add.js')
  })

  it('使用正则替换', () => {
    const aliasObj: any = alias({
      entries: [{ find: /^(.*)\.js$/, replacement: '$1.alias' }]
    })
    expect(aliasObj.resolveId('add.js')).toBe('add.alias.js')
  })

  it('匹配失败时不替换内容', () => {
    const aliasObj: any = alias({
      entries: {
        '&': './utils'
      }
    })
    expect(aliasObj.resolveId('!/add')).toBe('!/add')
  })
})
