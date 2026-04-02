import type { CanvasElement, Rect } from "@/core/Elements/CanvasElement";

function rectOverlap(a: Rect, b: Rect): boolean {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

export class Canvas {
  private x: number = 0;
  private y: number = 0;
  private width: number = 0;
  private height: number = 0;
  private elements: CanvasElement[] = [];

  getBounds(): Rect {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  translateY(y: number) {
    this.y += y;
  }

  translateX(x: number) {
    this.x += x;
  }

  get dimensions() {
    return {
      width: this.width,
      height: this.height,
    };
  }
  set dimensions(dim: { width: number; height: number }) {
    this.width = dim.width;
    this.height = dim.height;
  }

  add(element: CanvasElement) {
    this.elements.push(element);
  }
  getElementsInBounds(): CanvasElement[] {
    return this.elements.filter((el) =>
      rectOverlap(this.getBounds(), el.getBounds()),
    );
  }
}
