function printAll1(str: string | string[] | null) {
  if (typeof str === 'object') {
    for (const s of str) {
      console.log(s);
    }
  } else if (typeof str === 'string') {
    console.log(str);
  } else {
  }
}
