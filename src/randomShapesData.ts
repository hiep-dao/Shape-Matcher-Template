import { IShape, Shape } from "./types";

const renderShape = (): IShape[] => {
  const randomColor = 1;

  return [
    // line 1
    {
      color: `rgb(100,100, ${randomColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
    },
    {
      color: `rgb(100,100, ${randomColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
    },

    {
      color: `rgb(150,150, ${randomColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
    },
    {
      color: `rgb(150,150, ${randomColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
    },

    // line 2
    {
      color: `rgb(190,255, ${randomColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
    },
    {
      color: `rgb(190,255, ${randomColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
    },

    {
      color: `rgb(220, 110, ${randomColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
    },
    {
      color: `rgb(220, 110, ${randomColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
    },

    // line 3
    {
      color: `rgb(255, 190, ${randomColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
    },
    {
      color: `rgb(255, 190, ${randomColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
    },

    {
      color: `rgb(198, 220, ${randomColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
    },
    {
      color: `rgb(198, 220, ${randomColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
    },

    // line 4
    {
      color: `rgb(190, 221, ${randomColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
    },
    {
      color: `rgb(190, 221, ${randomColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
    },

    {
      color: `rgb(189, 130, ${randomColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
    },
    {
      color: `rgb(189, 130, ${randomColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
    },
  ];
};

export default renderShape