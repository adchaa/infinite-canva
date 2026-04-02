import { Circle } from "@/core/Elements/Circle";
import { Drawer } from "@/display/Drawer";

export class CircleDrawer implements Drawer<Circle> {
  draw(ctx: CanvasRenderingContext2D, element: Circle): void {}
}
