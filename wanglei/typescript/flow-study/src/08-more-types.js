// @flow 对象类型

// 字面量类型
const a: 'foo' = 'foo'

// 联合类型
const type: 'success' | 'warning' | 'danger' = 'danger'

const b: string | number = '123'

type StringOrNumber = string | number
const c: StringOrNumber = '123'

// maybe类型，扩展了null和undefined类型
const gender: ?number = null
