import { Canvas } from "@/core/Canvas";

const SPEED = 10;

export class DomEventHandler {
  static registerEvents(canvas: Canvas) {
    window.addEventListener("keydown", (ev) => {
      this.keyDownHandler(ev, canvas);
    });
    window.addEventListener("dragstart");
  }
  private static keyDownHandler(ev: KeyboardEvent, canvas: Canvas) {
    console.log(ev.key);
    switch (ev.key) {
      case "ArrowUp":
        canvas.translateY(SPEED);
        break;
      case "ArrowDown":
        canvas.translateY(-SPEED);
        break;
      case "ArrowRight":
        canvas.translateX(SPEED);
        break;
      case "ArrowLeft":
        canvas.translateX(-SPEED);
        break;
    }
  }
}
