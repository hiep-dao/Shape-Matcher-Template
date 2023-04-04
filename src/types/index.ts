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
}

export { Shape };
export type { IShape };