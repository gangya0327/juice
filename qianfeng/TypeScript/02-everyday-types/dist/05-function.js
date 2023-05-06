"use strict";
function greet(name) {
    console.log('hello, ' + name.toUpperCase() + ' !');
}
greet('peter');
function getNumber() {
    return 15;
}
const names = ['peter', 'raven', 'jack'];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
