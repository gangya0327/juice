function printAll(str: string | string[] | null) {
  if (str && typeof str === 'object') {
    for (const s of str) {
      console.log(s);
    }
  } else if (typeof str === 'string') {
    console.log(str);
  } else {
  }
}

function multiplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map((x) => {
      return x * factor;
    });
  }
}
