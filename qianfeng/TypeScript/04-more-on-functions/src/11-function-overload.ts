// 函数签名
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// 函数实现
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) return new Date(y, mOrTimestamp, d);
  else return new Date(mOrTimestamp);
}

const d1 = makeDate(123456);
const d2 = makeDate(5, 1, 2023);
 