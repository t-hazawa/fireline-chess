import React from 'react';
import Piece from './Piece';
import { IPiece } from '../types';

interface SquareProps {
  x: number;
  y: number;
  piece?: IPiece;
}

const Square: React.FC<SquareProps> = ({ x, y, piece }) => {
  return (
    <button className="square">
      {piece && <Piece player={piece.player} hp={piece.hp} />}
    </button>
  );
};

export default Square;
