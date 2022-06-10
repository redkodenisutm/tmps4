interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public area() {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public area() {
    return this.radius * this.radius * Math.PI;
  }
}

function getArea(shapes: Shape[]) {
  return shapes.reduce((previous, current) => previous + current.area(), 0);
}

export default () => {
  const shapes: Shape[] = [new Rectangle(3, 4), new Circle(1)];
  console.log(getArea(shapes));
};
