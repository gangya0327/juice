function firstElement(arr: any[]) {
  return 100;
}

firstElement(['a', 'b', 'c']);
firstElement([1, 2, 3]);

function firstElement2<T>(arr: T[]): T | undefined {
  // return 100
  return arr[0];
}

firstElement2<string>(['a', 'b', 'c']);
firstElement2<number>([11, 22, 33]);

function map<Input, Output>(arr: Input[], func: (args: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n));
