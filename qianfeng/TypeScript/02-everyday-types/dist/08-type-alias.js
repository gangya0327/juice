"use strict";
function printCoord8(pt) {
    //...
}
printCoord8({ x: 200, y: 110 });
function printId8(id) {
    //...
}
printId8(100);
printId8('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
