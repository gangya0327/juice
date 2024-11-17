import { reactive } from './reactive.js';

// const obj = { a: 1, b: 2 };
// const state1 = reactive(obj);
const obj = {};

const arr = [1, obj, 3, 4, 5, 6];
const state2 = reactive(arr);

state2.push(7);

console.log(arr);

// function fn() {
//   let i = state2.includes(obj);
//   console.log(i);
// }

// fn();
