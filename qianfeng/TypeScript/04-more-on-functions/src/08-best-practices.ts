// 推荐
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

// 不推荐
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// 推荐
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
  return arr.filter(func);
}

// 不推荐
function filter2<Type, Func extends (args: Type) => boolean>(arr: Type[], func: Func) {
  return arr.filter(func);
}

// 不推荐
function greet1<Str extends string>(s: Str) {
  console.log('hello ' + s);
}
greet1('world');

// 推荐
function greet2(s: string) {
  console.log('hello ' + s);
}
