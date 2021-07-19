import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  team: []
};

export const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addToTeam: (state, action) => {
      state.team.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.team));
    },
    removeFromTeam: (state, action) => {
      state.team = state.team.filter((item) => item.img !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.team));
    }
  }
});

export const { setData, addToTeam, removeFromTeam } = dogSlice.actions;

/* Selectors */
export const selectData = (state) => state.dog.data;
export const selectTeam = (state) => state.dog.team;

export default dogSlice.reducer;
