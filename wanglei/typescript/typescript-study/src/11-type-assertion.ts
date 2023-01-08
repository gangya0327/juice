export {}

const nums = [11, 12, 13, 14]

const res = nums.find((i) => i > 12)

// const square = res * res

const num1 = res as number
const num2 = <number>res // jsx时不能使用
