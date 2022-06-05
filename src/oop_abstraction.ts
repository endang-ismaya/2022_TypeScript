abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

class Rectangle extends Shape {
  constructor(public length: number, public width: number, color: string) {
    super(color);
  }

  override render(): void {
    throw new Error("Method not implemented.");
  }
}
