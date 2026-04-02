import { CanvasElement } from "@/core/Elements/CanvasElement";
import { Cord } from "@/types";

export interface Drawer<T extends CanvasElement = CanvasElement> {
  draw(ctx: CanvasRenderingContext2D, element: T, offset: Cord): void;
}
