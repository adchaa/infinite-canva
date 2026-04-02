import { CanvasElement } from "@/core/Elements/CanvasElement";
import { Rectangle } from "@/core/Elements/Rectangle";
import { Drawer } from "@/display/Drawer";
import { RectangleDrawer } from "./RectangleDrawer";
import { Circle } from "@/core/Elements/Circle";
import { CircleDrawer } from "./CircleDrawer";

export class DrawerFactory {
  static registry = new Map<string, Drawer>([
    [Rectangle.name, new RectangleDrawer()],
    [Circle.name, new CircleDrawer()],
  ]);

  static getDrawer(element: CanvasElement) {
    return this.registry.get(element.constructor.name);
  }
}
