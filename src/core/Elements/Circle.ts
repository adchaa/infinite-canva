import { CanvasElement, Rect, Style } from "./CanvasElement";

export class Circle extends CanvasElement {
  constructor(
    xCenter: number,
    yCenter: number,
    private radius: number,
    style?: Style,
  ) {
    super(xCenter, yCenter, style);
  }

  override getBounds(): Rect {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    };
  }
}
