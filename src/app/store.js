import { configureStore } from '@reduxjs/toolkit';
import dogReducer from '../features/dog/dogSlice';

export const store = configureStore({
  reducer: {
    dog: dogReducer
  }
});
