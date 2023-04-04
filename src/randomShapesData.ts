import { IShape, Shape } from "./types";

export const renderShape = (): IShape[] => {
  const randomBlueColor = Math.floor(Math.random() * 256);;

  return [
    // line 1
    {
      color: `rgb(50, 150, ${randomBlueColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
      value: 1,
    },
    {
      color: `rgb(50, 150, ${randomBlueColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
      value: 1,
    },

    {
      color: `rgb(70, 70, ${randomBlueColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
      value: 2,
    },
    {
      color: `rgb(70, 70, ${randomBlueColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
      value: 2,
    },

    // line 2
    {
      color: `rgb(100, 100, ${randomBlueColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
      value: 3,
    },
    {
      color: `rgb(100, 100, ${randomBlueColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
      value: 3,
    },

    {
      color: `rgb(130, 130, ${randomBlueColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
      value: 4,
    },
    {
      color: `rgb(130, 130, ${randomBlueColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
      value: 4,
    },

    // line 3
    {
      color: `rgb(170, 170, ${randomBlueColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
      value: 5,
    },
    {
      color: `rgb(170, 170, ${randomBlueColor})`,
      shape: Shape.CIRCLE,
      isOpen: false,
      value: 5,
    },

    {
      color: `rgb(200, 200, ${randomBlueColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
      value: 6,
    },
    {
      color: `rgb(200, 200, ${randomBlueColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
      value: 6,
    },

    // line 4
    {
      color: `rgb(230, 230, ${randomBlueColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
      value: 7,
    },
    {
      color: `rgb(230, 230, ${randomBlueColor})`,
      shape: Shape.TRIANGLE,
      isOpen: false,
      value: 7,
    },

    {
      color: `rgb(200, 100, ${randomBlueColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
      value: 8,
    },
    {
      color: `rgb(200, 100, ${randomBlueColor})`,
      shape: Shape.SQUARE,
      isOpen: false,
      value: 8,
    },
  ];
};

export const shuffle = (array: IShape[]): IShape[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export function deepCloneArray(arr: any[]) {
  let clone: any[] = [];

  arr.forEach((item) => {
    let clonedItem = { ...item };
    clone.push(clonedItem);
  });

  return clone;
}