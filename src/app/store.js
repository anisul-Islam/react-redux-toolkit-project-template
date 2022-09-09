import { configureStore } from '@reduxjs/toolkit';
import demoReducer from '../features/demo/demoSlice';
const store = configureStore({
  reducer: {
    demoR: demoReducer
  }
});

export default store;
