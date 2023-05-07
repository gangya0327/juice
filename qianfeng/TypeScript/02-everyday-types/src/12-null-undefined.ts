function doSomething(x: string | null) {
  if (x === null) {
    //...
  } else {
    console.log('hello ' + x.toUpperCase());
  }
}

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed(2));
}
