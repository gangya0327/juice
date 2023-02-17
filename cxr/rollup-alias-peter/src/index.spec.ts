import { describe, it, expect } from 'vitest'
import alias from '.'

describe('alias', () => {
  describe('entries is object', () => {
    it('匹配成功，替换内容', () => {
      const aliasObj: any = alias({
        entries: {
          '@': './utils'
        }
      })
      expect(aliasObj.resolveId('@/add')).toBe('./utils/add.js')
    })

    it('匹配失败，不替换内容', () => {
      const aliasObj: any = alias({
        entries: {
          '@': './utils'
        }
      })
      expect(aliasObj.resolveId('#/add')).toBe('#/add')
    })
  })

  describe('entries is array', () => {
    it('匹配成功，替换内容', () => {
      const aliasObj: any = alias({
        entries: [
          { find: '@', replacement: './utils' },
          { find: '#', replacement: './components' }
        ]
      })
      expect(aliasObj.resolveId('@/add')).toBe('./utils/add.js')
      expect(aliasObj.resolveId('#/add')).toBe('./components/add.js')
    })

    it('匹配失败，不替换内容', () => {
      const aliasObj: any = alias({
        entries: [{ find: '@', replacement: './utils' }]
      })
      expect(aliasObj.resolveId('#/add')).toBe('#/add')
    })

    it('匹配正则成功，替换内容', () => {
      const aliasObj: any = alias({
        entries: [
          { find: '@', replacement: './utils' },
          {
            find: /^(.*)\.js$/,
            replacement: '$1.alias'
          }
        ]
      })
      expect(aliasObj.resolveId('@/add')).toBe('./utils/add.js')
      expect(aliasObj.resolveId('add.js')).toBe('add.alias.js')
    })
  })
})
