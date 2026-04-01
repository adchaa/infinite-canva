import { CanvasElement, type Rect } from "./Element";

type Style = {
  fillColor?: string;
  strokeColor?: string;
};

export class Rectangle extends CanvasElement {
  constructor(
    x: number,
    y: number,
    private width: number,
    private height: number,
    private style?: Style
  ) {
    super(x, y);
  }

  override getBounds(): Rect {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  getStyle(): Style | undefined {
    return this.style;
  }
}
