import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
  name: 'modal',
  initialState: { on: false, data: {}, config: false },
  reducers: {
    toggleModalOn: (state, action) => {
      state.on = true;
      state.config = action.payload;
    },
    toggleModalOff: (state) => { state.on = false; },
  },
});
export const { toggleModalOn, toggleModalOff } = modalSlice.actions;
export const Modal = modalSlice.reducer;