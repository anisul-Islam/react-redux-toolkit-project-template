import { createSlice } from '@reduxjs/toolkit';

const initialState = { demo: 0 };

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {}
});

export default demoSlice.reducer;
