type Point = {
  x: number;
  y: number;
};

function printCoord8(pt: Point) {
  //...
}

printCoord8({ x: 200, y: 110 });

type ID = number | string;

function printId8(id: ID) {
  //...
}

printId8(100);
printId8('hello');

type UserInputSanitizedString = string;

function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 2);
}

let userInput = sanitizedInput('hello');
