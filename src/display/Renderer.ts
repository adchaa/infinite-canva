import type { Canvas } from "@/core/Canvas";
import { CanvasElement } from "@/core/Elements/Element";

export interface Renderer {
  render(canvas: Canvas): void;
  renderElement(element: CanvasElement): void;
}
