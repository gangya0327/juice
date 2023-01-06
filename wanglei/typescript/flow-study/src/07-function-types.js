// @flow 对象类型

function foo(callback: (string, number) => void) {
  callback('string', 190)
}

foo(function (str, num) {
  console.log(str, num)
  // 函数没有返回值
})
