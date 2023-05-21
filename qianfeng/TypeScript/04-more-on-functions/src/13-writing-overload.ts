// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: string | any[]): number {
//   return x.length;
// }

function len(x: string | any[]) {
  return x.length;
}
len('hello');
len([1, 2, 3]);

len(Math.random() > 0.5 ? 'hello' : [1, 2, 3]);
