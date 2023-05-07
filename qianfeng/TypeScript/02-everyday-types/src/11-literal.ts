let testString = 'hello world';
testString = 'hello typescript';

const constantString = 'hello world';
constantString = 'hello typescript';

let xx: 'hello' = 'hello';
xx = 'world';

function printText(s: string, alignment: 'left' | 'right' | 'center') {
  //...
}
printText('hello', 'center');

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}

function configure(x: Options | 'auto') {}
configure({ width: 100 });
configure('auto');

let b1: true = true;
let b2: false = false;

const obj11 = {
  count: 0,
};
