function greet(name: string) {
  console.log('hello, ' + name.toUpperCase() + ' !');
}

greet('peter');

function getNumber(): number {
  return 15;
}

const names = ['peter', 'raven', 'jack'];
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
