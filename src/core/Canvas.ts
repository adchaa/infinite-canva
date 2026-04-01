import type { CanvasElement } from "./Elements/Element";

export class Canvas {
  private width: number = 0;
  private height: number = 0;
  private elements: CanvasElement[] = [];

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
    return this.elements;
  }
}
