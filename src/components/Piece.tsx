import React from 'react';

interface PieceProps {
    player: 'player1' | 'player2';
    hp: number;
}

const Piece: React.FC<PieceProps> = ({ player, hp }) => {
  return (
    <div className={`piece ${player}`}>
      {player} - HP: {hp}
    </div>
  );
};

export default Piece;
