let person = { name: 'abc', age: 16 };
console.log(person.age); // abc
console.log(Reflect.get(person, 'age', person)); // 16
console.log(Reflect.set(person, 'name', 'ppp', person));

const observable = (params) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      list.forEach((fn) => fn());
      return result;
    },
  });
};
