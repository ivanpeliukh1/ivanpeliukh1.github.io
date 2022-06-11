import { configureStore } from '@reduxjs/toolkit';
import memReducer from '../features/memes/memSlice';

export const store = configureStore({
  reducer: {
    memList: memReducer,
  },
});
