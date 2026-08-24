import { createSlice } from '@reduxjs/toolkit';
export const menuLeftSlice = createSlice({
  name: 'menuLeft',
  initialState: { on: false },
  reducers: {
    toggleMenuLeft: (state) => { state.on = !state.on; }
  },
});
export const { toggleMenuLeft } = menuLeftSlice.actions;
export const MenuLeft = menuLeftSlice.reducer;
