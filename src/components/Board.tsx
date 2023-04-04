import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import './Board.css';
import styled from "styled-components";
import renderShape from '../randomShapesData';
import { IShape } from '../types';

const BoardCard = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  max-width: 80%;
  margin: 0px auto;
`;

const shuffle = (array: IShape[]): IShape[] => {
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

const Board: React.FC = (): JSX.Element => {
  const [shapes, setShapes] = useState(() => {
    return shuffle(renderShape());
  });
  // states...
  useEffect(() => {
    // Initialize the game board with random shapes and colors
  }, []);

  const handleCellClick = (index: number) => {
    const _shape = [...shapes];
    _shape[index].isOpen = !_shape[index].isOpen;
    setShapes(_shape);
  };

  return (
    <BoardCard>
      {shapes.map((shape, index) => (
        <Cell
          key={shape.color + index}
          shape={shape.shape}
          color={shape.color}
          isOpen={shape.isOpen}
          onClick={() => handleCellClick(index)}
        />
      ))}
    </BoardCard>
  );
};

export default Board;

