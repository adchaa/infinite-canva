export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Style = {
  fillColor?: string;
  strokeColor?: string;
};

export abstract class CanvasElement {
  constructor(
    protected x: number,
    protected y: number,
    protected style?: Style,
  ) {}

  abstract getBounds(): Rect;
}
