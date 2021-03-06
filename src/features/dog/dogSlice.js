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
      localStorage.setItem('team', JSON.stringify(state.team));
    },
    removeFromTeam: (state, action) => {
      state.team = state.team.filter((item) => item.img !== action.payload);
      localStorage.setItem('team', JSON.stringify(state.team));
    },
    setTeamFromLocalStorate: (state, action) => {
      state.team = action.payload;
    }
  }
});

export const { setData, addToTeam, removeFromTeam, setTeamFromLocalStorate } =
  dogSlice.actions;

/* Selectors */
export const selectData = (state) => state.dog.data;
export const selectTeam = (state) => state.dog.team;

export default dogSlice.reducer;
