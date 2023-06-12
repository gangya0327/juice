// 匿名方式
function greet(person: { name: string; age: number }) {
  return 'hello ' + person.name;
}

// 接口方式命名
interface Person {
  name: string;
  age: number;
}
function greet1(person: Person) {
  return 'hello ' + person.name;
}

// 别名方式命名
type Person1 = {
  name: string;
  age: number;
};
function greet2(person: Person1) {
  return 'hello ' + person.name;
}
