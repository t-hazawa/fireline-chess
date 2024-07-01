import React, { useState } from 'react';
import Board from './Board';
import { IPiece } from '../types';

const Game: React.FC = () => {
  const [playerTurn, setPlayerTurn] = useState<'player1' | 'player2'>('player1');
  const [pieces, setPieces] = useState<IPiece[]>([
    { player: 'player1', position: [0, 0], hp: 100 },
    { player: 'player1', position: [0, 1], hp: 100 },
    { player: 'player2', position: [7, 7], hp: 100 },
    { player: 'player2', position: [7, 6], hp: 100 },
  ]);

  const handleTurnEnd = () => {
    setPlayerTurn(playerTurn === 'player1' ? 'player2' : 'player1');
  };

  const movePiece = (index: number, newPosition: [number, number]) => {
    setPieces(prevPieces => {
      const newPieces = [...prevPieces];
      newPieces[index].position = newPosition;
      // 攻撃ロジックの追加
      attackIfNeeded(newPieces[index]);
      return newPieces;
    });
  };
  
  const attackIfNeeded = (piece:IPiece) => {
    const targets = pieces.filter(p => p.player !== piece.player && isInAttackRange(piece.position, p.position));
    targets.forEach(target => {
      const damage = 100 / targets.length;
      target.hp -= damage;
    });
  };  
  
  const isInAttackRange = (position1: [number, number], position2: [number, number]) => {
    const dx = position1[0] - position2[0];
    const dy = position1[1] - position2[1];
    return dx * dx + dy * dy <= 2;
  };

  return (
    <div>
      <h1>射線将棋</h1>
      <Board pieces={pieces} />
      <button onClick={handleTurnEnd}>End Turn</button>
    </div>
  );
};



export default Game;
