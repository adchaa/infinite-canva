import type { Canvas } from "@/core/Canvas";

export interface Renderer {
  render(canvas: Canvas): void;
}
