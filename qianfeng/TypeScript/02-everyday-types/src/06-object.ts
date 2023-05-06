function printCoord(pt: { x: number; y: number }) {
  console.log('坐标的x值为：' + pt.x);
  console.log('坐标的y值为：' + pt.y);
}

printCoord({
  x: 3,
  y: 5,
});

function printName(obj: { first: string; last?: string }) {
  //...
}

printName({ first: 'peter' });
printName({ first: 'peter', last: 'raven' });
