export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export abstract class CanvasElement {
  constructor(protected x: number, protected y: number) {}

  abstract getBounds(): Rect;
}
