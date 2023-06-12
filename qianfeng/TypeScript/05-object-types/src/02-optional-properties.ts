type Shape = {};

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape({ shape: Shape, xPos: number = 100, yPos = 0 }: PaintOptions) {
  console.log(Shape);
  console.log(number);
}

const shape: Shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
