import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {}
});
// export const {} = demoSlice.actions;
export default demoSlice.reducer;
