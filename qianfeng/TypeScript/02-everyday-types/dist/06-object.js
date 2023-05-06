"use strict";
function printCoord(pt) {
    console.log('坐标的x值为：' + pt.x);
    console.log('坐标的y值为：' + pt.y);
}
printCoord({
    x: 3,
    y: 5,
});
function printName(obj) {
    //...
}
printName({ first: 'peter' });
printName({ first: 'peter', last: 'raven' });
