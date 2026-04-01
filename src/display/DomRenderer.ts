import { Canvas } from "@/core/Canvas";
import { CanvasElement } from "@/core/Elements/Element";
import { Rectangle } from "@/core/Elements/Rectangle";
import { Renderer } from "@/display/Renderer";

const FPS_LIMIT = 60;

export class DomRenderer implements Renderer {
  private backgroundColor = "#181818";
  private ctx: CanvasRenderingContext2D;
  private lastFrameTime: number = performance.now();
  private frameInterval = 1000 / FPS_LIMIT;

  constructor(private canvasElement: HTMLCanvasElement) {
    this.ctx = this.canvasElement.getContext("2d")!;
  }

  render(canvas: Canvas) {
    const now = performance.now();
    const delta = now - this.lastFrameTime;
    if (delta >= this.frameInterval) {
      this.lastFrameTime = now;
      this.canvasElement.width = canvas.dimensions.width;
      this.canvasElement.height = canvas.dimensions.height;
      this.draw(canvas);
    }
    requestAnimationFrame(() => this.render(canvas));
  }

  draw(canvas: Canvas) {
    this.ctx.save();
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    this.ctx.restore();
    for (const element of canvas.getElementsInBounds()) {
      this.ctx.save();
      this.renderElement(element);
      this.ctx.restore();
    }
  }

  renderElement(element: CanvasElement): void {
    if (element instanceof Rectangle) {
      const bounds = element.getBounds();
      this.ctx.beginPath();
      const style = element.getStyle();
      this.ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
      if (style?.strokeColor) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = style.strokeColor;
        this.ctx.stroke();
      }
      if (style?.fillColor) {
        this.ctx.fillStyle = style.fillColor;
        this.ctx.fill();
      }
    }
  }
}
