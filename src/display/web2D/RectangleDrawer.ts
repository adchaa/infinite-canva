import { Rectangle } from "@/core/Elements/Rectangle";
import { Drawer } from "@/display/Drawer";

export class RectangleDrawer implements Drawer<Rectangle> {
  draw(ctx: CanvasRenderingContext2D, element: Rectangle): void {
    const bounds = element.getBounds();
    const style = element.getStyle();

    ctx.beginPath();
    ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);

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
