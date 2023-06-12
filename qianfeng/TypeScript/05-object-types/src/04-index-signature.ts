interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ['a', 'b'];
const secondItem = myArray[0];

interface TestString {
  [props: string]: number;
}
let testString: TestString = {
  x: 100,
  y: 200,
};

interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [index: string]: number | string;
  length: number;
  name: string;
}
let notOkay: NotOkay = {
  x: 100,
  length: 200,
  name: 'arr',
};

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ['a', 'b'];
