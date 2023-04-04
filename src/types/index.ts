// your types here
enum Shape {
  CIRCLE = "CIRCLE",
  TRIANGLE = "TRIANGLE",
  SQUARE = "SQUARE",
}

interface IShape {
  color: string;
  shape: Shape;
  isOpen: boolean;
  value: number;
}

export { Shape };
export type { IShape };