function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr7 = combine<number | string>([1, 2, 3], ['a', 'b', 'c', 'd']);
