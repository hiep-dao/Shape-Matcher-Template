import React from 'react';
import { Shape } from '../types';
import styled from 'styled-components'

interface CellProps {
  color: string;
  shape: Shape;
  isOpen: boolean;
  onClick: () => void;
}

interface ShapeProps {
  color: string;
  shape: Shape;
}

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ color }: {color: string}) => color};
  border-radius: 50%;
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ color }: {color: string}) => color};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid ${({ color }: { color: string }) => color};
  @media only screen and (max-width: 554px) {
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 70px solid ${({ color }: { color: string }) => color};
  }
`;

// wrapper
const FaceDown = styled.div`
  background: white;
  cursor: pointer;

  max-width: 22%;
  width: 22%;
  height: 200px;

  border: 1px solid gray;
  border-radius: 5px;

  margin: 0px;
  margin-bottom: 15px;
  padding: 10px;

  @media only screen and (max-width: 1440px) {
    width: 18%;
  }

  @media only screen and (max-width: 554px) {
    width: 14%;
    height: 97px;;
  }
`;

const FaceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  max-width: 22%;
  width: 22%;
  height: 200px;

  border: 1px solid gray;
  border-radius: 5px;

  margin: 0px;
  margin-bottom: 10px;
  padding: 15px;

  @media only screen and (max-width: 1440px) {
    width: 18%;
  }

  @media only screen and (max-width: 554px) {
    width: 14%;
    height: 97px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  height: fit-content;
`;

const RenderShape: React.FC<ShapeProps> = ({ shape, color }): JSX.Element => {
  switch (shape) {
    case Shape.CIRCLE:
      return <Circle color={color} />;
    case Shape.SQUARE:
      return <Square color={color} />;
    default:
      return <Triangle color={color} />;
  }
};

const Cell: React.FC<CellProps> = ({
  color,
  shape,
  isOpen,
  onClick,
}): JSX.Element => {
  // Render cell with shape and color, use CSS to style based on shape and color.
  return (
    <>
      {isOpen ? (
        <FaceCard onClick={onClick}>
          <RenderShape color={color} shape={shape} />
        </FaceCard>
      ) : (
        <FaceDown onClick={onClick}>
          <Wrap>
            <Text>TECHNIXO</Text>
          </Wrap>
        </FaceDown>
      )}
    </>
  );
};

export default Cell;
