import React, { useRef, useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import styled from "styled-components";
import { deepCloneArray, renderShape, shuffle } from "../randomShapesData";
import { IShape } from "../types";

const BoardCard = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  max-width: 80%;
  margin: 0px auto;
`;



interface RevealedShape {
  prevIndex: number;
}

const Board: React.FC = (): JSX.Element => {
  const [shapes, setShapes] = useState(() => {
    return shuffle(renderShape());
  });
  console.log(shapes);
  const revealedShape = useRef<RevealedShape>({
    prevIndex: -1,
  });

  const handleCheckCard = (cloneShapes: IShape[], currentIndex: number) => {
    if (cloneShapes[currentIndex].value === cloneShapes[revealedShape.current.prevIndex].value) {
      cloneShapes[currentIndex].isOpen = true;
      cloneShapes[revealedShape.current.prevIndex].isOpen = true;
      setShapes(cloneShapes);
      revealedShape.current.prevIndex = -1;
    } else {
      cloneShapes[currentIndex].isOpen = true;
      cloneShapes[revealedShape.current.prevIndex].isOpen = true;

      const tempPrevIndex = revealedShape.current.prevIndex;
      
      setShapes([...cloneShapes]);

      setTimeout(() => {
        cloneShapes[currentIndex].isOpen = false;
        cloneShapes[tempPrevIndex].isOpen = false;
        revealedShape.current.prevIndex = -1;
        setShapes([...cloneShapes]);
      }, 300);
    }
  }

  const handleCellClick = (index: number) => {
    const cloneShapes = deepCloneArray(shapes);

    if (revealedShape.current.prevIndex === -1) {
      cloneShapes[index].isOpen = true;
      setShapes(cloneShapes);
      revealedShape.current.prevIndex = index;
    } else {
      handleCheckCard(cloneShapes, index);
    }
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
