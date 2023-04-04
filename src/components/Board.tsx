import React, { useRef, useState } from "react";
import Cell from "./Cell";
import styled from "styled-components";
import { deepCloneArray, renderShape, shuffle } from "../randomShapesData";
import { IShape } from "../types";

const BoardCard = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  max-width: 90%;
  margin: 0px auto;
  @media only screen and (max-width: 1024px) { 
    max-width: 95%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Board: React.FC = (): JSX.Element => {
  const [shapes, setShapes] = useState(() => {
    return shuffle(renderShape());
  });
  const prevIndex = useRef<number>(-1);

  const handleCheckCard = (cloneShapes: IShape[], currentIndex: number) => {
    if (cloneShapes[currentIndex].value === cloneShapes[prevIndex.current].value) {
      cloneShapes[currentIndex].isOpen = true;
      cloneShapes[prevIndex.current].isOpen = true;

      setShapes(cloneShapes);
      prevIndex.current = -1;
    } else {
      cloneShapes[currentIndex].isOpen = true;
      cloneShapes[prevIndex.current].isOpen = true;

      setShapes([...cloneShapes]);
      
      setTimeout(() => {
        cloneShapes[currentIndex].isOpen = false;
        cloneShapes[prevIndex.current].isOpen = false;
        prevIndex.current = -1;
        setShapes([...cloneShapes]);
      }, 300);
    }
  }

  const handleCellClick = (index: number) => {
    const cloneShapes = deepCloneArray(shapes);

    if (prevIndex.current === -1) {
      cloneShapes[index].isOpen = true;
      setShapes(cloneShapes);
      prevIndex.current = index;
    } else {
      handleCheckCard(cloneShapes, index);
    }
  };

  const handleReloadGame = () => {
    setShapes(shuffle(renderShape()));
  };

  return (
    <>
      <Wrapper>
        <button onClick={handleReloadGame}>New Game</button>
      </Wrapper>
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
    </>
  );
};

export default Board;
