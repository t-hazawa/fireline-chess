import React from 'react';
import Square from './Square';
import { IPiece } from '../types';

interface BoardProps {
    pieces: IPiece[];
}

const Board: React.FC<BoardProps> = ({ pieces }) => {
  const renderSquare = (x: number, y: number) => {
    const piece = pieces.find(p => p.position[0] === x && p.position[1] === y);
    return <Square x={x} y={y} piece={piece} />;
  };

  const board = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(renderSquare(i, j));
    }
    board.push(<div key={i} className="board-row">{row}</div>);
  }

  return <div>{board}</div>;
};

export default Board;
