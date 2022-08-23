import { describe, expect, it } from 'vitest'
import { capitalize, toHump, toLine } from '@/utils/letter'

describe('utils', () => {
  it('toLine1', () => {
    expect(toLine('camelCase')).toEqual('camel-case')
  })
  it('toLine2', () => {
    expect(toLine('CamelCase')).toEqual('camel-case')
  })
  it('toHump', () => {
    expect(toHump('camel-case')).toEqual('camelCase')
  })
  it('firstUpper', () => {
    expect(capitalize('firstUpper')).toEqual('FirstUpper')
  })
})
