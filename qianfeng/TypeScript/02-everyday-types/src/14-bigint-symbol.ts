const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;

const firstName = Symbol('name');
const secondName = Symbol('name');

if (firstName === secondName) {
  console.log('==='); // 不会进入
}
