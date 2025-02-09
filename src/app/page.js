// pages/index.js
import React from 'react';
import Game from '../components/Game';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Tic Tac Toe with Redux Toolkit, Tailwind CSS, and JavaScript
      </h1>
      <Game />
    </div>
  );
};

export default Home;
