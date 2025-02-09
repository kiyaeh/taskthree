// store/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Start with one board: an array of nine null values.
  history: [Array(9).fill(null)],
  currentMove: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playMove: (state, action) => {
      // action.payload is the new board state (array of 9 squares)
      const newHistory = state.history.slice(0, state.currentMove + 1).concat([action.payload]);
      state.history = newHistory;
      state.currentMove = newHistory.length - 1;
    },
    jumpTo: (state, action) => {
      // action.payload is the move number to jump to
      state.currentMove = action.payload;
    }
  },
});

export const { playMove, jumpTo } = gameSlice.actions;
export default gameSlice.reducer;
