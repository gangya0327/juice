"use strict";
function printId(id) {
    //...
}
printId(10);
printId('aaa');
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('hello, ' + x.join(' and'));
    }
    else {
        console.log('welcome lone travel ' + x);
    }
}
welcomePeople('peter');
welcomePeople(['raven', 'jack']);
function getFirstThree(x) {
    console.log(x.slice(0, 3)); // 字符串和数组共有方法
}
