interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
const cc: ColorfulCircle = {
  color: 'red',
  radius: 10,
};

function draw(circle: Colorful & Circle) {
  console.log(circle.color);
  console.log(circle.radius);
}

draw({ color: 'red', radius: 2 });
