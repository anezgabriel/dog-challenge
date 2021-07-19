import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dogReducer from '../features/dog/dogSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dog: dogReducer
  }
});
