class Rectangle {
  public width: number;
  public height: number;
}

class Circle {
  public radius: number;
}

function getArea(shapes: (Rectangle | Circle)[]) {
  return shapes.reduce((previous, current) => {
    if (current instanceof Rectangle) {
      return current.width * current.height;
    } else if (current instanceof Circle) {
      return current.radius * current.radius * Math.PI;
    } else {
      throw new Error("Unknown shape!");
    }
  }, 0);
}
