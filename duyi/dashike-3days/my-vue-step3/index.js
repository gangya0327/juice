import { reactive } from './reactive.js';

const obj = { a: 1, b: 2 };

const state1 = reactive(obj);

function fn() {
  for (const key in state1) {
  }
}
// state1.a;
// fn();

state1.a = 1;
