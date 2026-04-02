import { CanvasElement } from "@/core/Elements/CanvasElement";

export interface Drawer<T extends CanvasElement = CanvasElement> {
  draw(ctx: CanvasRenderingContext2D, element: T): void;
}
