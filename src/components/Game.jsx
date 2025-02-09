// components/Game.js
"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from './Board';
import { playMove, jumpTo } from '../store/gameSlice';

const Game = () => {
  const dispatch = useDispatch();
  const history = useSelector(state => state.game.history);
  const currentMove = useSelector(state => state.game.currentMove);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    dispatch(playMove(nextSquares));
  };

  const handleJumpTo = (move) => {
    dispatch(jumpTo(move));
  };

  return (
    <div className="flex flex-col md:flex-row font-mono">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4">
        <ol>
          {history.map((_, move) => {
            const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
            return (
              <li key={move}>
                <button
                  onClick={() => handleJumpTo(move)}
                  className="mb-1 px-2 py-1 border rounded hover:bg-gray-200 focus:outline-none"
                >
                  {description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Game;
