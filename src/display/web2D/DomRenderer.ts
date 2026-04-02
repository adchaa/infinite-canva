import { Canvas } from "@/core/Canvas";
import { Renderer } from "@/display/Renderer";
import { DrawerFactory } from "./DrawerFactory";

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
      this.canvasElement.height,
    );
    this.ctx.restore();
    for (const element of canvas.getElementsInBounds()) {
      this.ctx.save();
      DrawerFactory.getDrawer(element)?.draw(this.ctx, element);
      this.ctx.restore();
    }
  }
}
