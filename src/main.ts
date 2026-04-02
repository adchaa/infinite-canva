import { Canvas } from "@/core/Canvas";
import { Renderer } from "@/display/Renderer";
import { DomRenderer } from "@/display/web2D/DomRenderer";
import { Rectangle } from "@/core/Elements/Rectangle";
import { DomEventHandler } from "./display/web2D/EventHandler";

const canvas = new Canvas();

canvas.add(
  new Rectangle(50, 50, 100, 100, {
    fillColor: "#fff",
    strokeColor: "#05f",
  }),
);

let renderer: Renderer | null = null;
if (typeof window !== "undefined") {
  const htmlCanvas = document.getElementById(
    "canvasElement",
  ) as HTMLCanvasElement;
  const dpr = window.devicePixelRatio || 1;
  canvas.dimensions = {
    width: window.innerWidth * dpr,
    height: window.innerHeight * dpr,
  };
  renderer = new DomRenderer(htmlCanvas);
  DomEventHandler.registerEvents(canvas);
  window.addEventListener("resize", () => {
    canvas.dimensions = {
      width: window.innerWidth * dpr,
      height: window.innerHeight * dpr,
    };
  });
}

renderer?.render(canvas);
