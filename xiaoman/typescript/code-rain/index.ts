let canvas: HTMLCanvasElement = document.querySelector('#rain') as HTMLCanvasElement;
let ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

console.log('canvas.width :>> ', canvas.width);

let str: string = 'abcdefghijklmnopqrstuvwxyz0123456789!#$%^&*-+';
// let str: string = '01';
let arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(arr);

const rain = () => {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '14px Arial';
  ctx.fillStyle = '#0f0';
  arr.forEach((item, index) => {
    ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 15, item + 20);
    arr[index] = item > canvas.height || item > Math.random() * 20000 ? 0 : item + 15;
  });
};

setInterval(rain, 60);
