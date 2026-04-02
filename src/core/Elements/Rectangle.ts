import { CanvasElement, Style, type Rect } from "./CanvasElement";

export class Rectangle extends CanvasElement {
  constructor(
    x: number,
    y: number,
    private width: number,
    private height: number,
    style?: Style,
  ) {
    super(x, y, style);
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
