// 循环 遍历 迭代

let arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i)
}

// arr.forEach((item, index, arr) => {
//   console.log(item, index, arr)
// })

console.log('----------------')

let obj = {
  a: 1,
  b: 2,
  c: 3
}

// 类数组
let arrObj = {
  0: 1,
  1: 2,
  2: 3,
  legnth: 3,
  slice: Array.prototype.slice
}
for (let key in obj) {
  console.log(key, obj[key])
}

console.log('----------------')

let map = new Map([
  [{ a: 1 }, 1],
  [{ b: 2 }, 2],
  [{ c: 3 }, 3]
])
console.log(map)
for (let key in map) {
  console.log(key) // 无结果
}

let set = new Set(['a', 'b', 'c'])
console.log(set)
for (let key in set) {
  console.log(key) // 无结果
}

;(function (a, b, c) {
  console.log(arguments)
})(1, 2, 3)

console.log('----------------')

Object.prototype.testObj = function () {}
Array.prototype.testArr = function () {}

let iterable = [4, 5, 6]
iterable.foo = 'bar'
console.log(iterable)

for (let i in iterable) {
  console.log(i)
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i)
  }
}

for (let i of iterable) {
  console.log(i)
}

console.log('----------------')

function* generator() {
  for (let v of arr) {
    yield v
  }
}

const iterator = generator(arr)
for (let i = 0; i < arr.length; i++) {
  console.log(iterator.next())
}

console.log('----------------')

function generatorFn(arr) {
  let nextIndex = 0
  return {
    next() {
      return nextIndex < arr.length ? { value: arr[nextIndex++], done: false } : { value: undefined, done: true }
    }
  }
}
const iterator1 = generatorFn(arr)
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())

console.log('----------------')

const o = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}

Object.prototype[Symbol.iterator] = iterator2
function iterator2() {
  let nextIndex = 0
  let _this = this
  return {
    next() {
      return nextIndex < _this.length ? { value: _this[nextIndex++], done: false } : { value: undefined, done: true }
    }
  }
}

for (let v of o) {
  console.log(v)
}
