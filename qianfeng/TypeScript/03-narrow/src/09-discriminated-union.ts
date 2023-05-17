// interface Shape {
//   kind: 'circle' | 'square';
//   radius?: number;
//   sideLength?: number;
// }

interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape9 = Circle | Square;

function getArea9(shape: Shape9) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      break;
  }
}
