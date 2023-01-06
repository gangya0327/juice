// @flow 对象类型

const obj1: { foo: string, bar: number } = { foo: 'foo', bar: 12 }

const obj2: { foo?: string, bar: number } = { bar: 12 }

const obj3: { [string]: string | number } = {}

obj3.key1 = 'value'
obj3.key2 = 199
