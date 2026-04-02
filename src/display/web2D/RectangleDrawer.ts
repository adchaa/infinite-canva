import { Rectangle } from "@/core/Elements/Rectangle";
import { Drawer } from "@/display/Drawer";
import { Cord } from "@/types";

export class RectangleDrawer implements Drawer<Rectangle> {
  draw(
    ctx: CanvasRenderingContext2D,
    element: Rectangle,
    canvasOffset: Cord,
  ): void {
    const bounds = element.getBounds();
    const style = element.getStyle();

    ctx.beginPath();
    ctx.rect(
      bounds.x - canvasOffset.x,
      bounds.y - canvasOffset.y,
      bounds.width,
      bounds.height,
    );

    if (style?.strokeColor) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = style.strokeColor;
      ctx.stroke();
    }
    if (style?.fillColor) {
      ctx.fillStyle = style.fillColor;
      ctx.fill();
    }
  }
}
