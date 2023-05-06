function printId(id: number | string) {
  //...
}

printId(10);
printId('aaa');

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('hello, ' + x.join(' and'));
  } else {
    console.log('welcome lone travel ' + x);
  }
}

welcomePeople('peter');
welcomePeople(['raven', 'jack']);

function getFirstThree(x: number[] | string) {
  console.log(x.slice(0, 3)); // 字符串和数组共有方法
}
