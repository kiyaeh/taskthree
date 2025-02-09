// components/Square.js
"use client";
import React from 'react';

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="flex items-center justify-center border border-gray-400 bg-white text-xl font-bold h-10 w-10 focus:outline-none"
    >
      {value}
    </button>
  );
};

export default Square;
