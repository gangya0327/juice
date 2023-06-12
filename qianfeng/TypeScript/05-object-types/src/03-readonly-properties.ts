interface SomeType {
  readonly prop: string;
}
function doSomething(obj: SomeType) {}

interface Home {
  resident: {
    name: string;
    age: number;
  };
}

function visitForBirthday(home: Home) {}
