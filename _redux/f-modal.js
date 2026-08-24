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





/*
const defaults = { on: false, data: { }, config: false };

export const Modal = (state = defaults, action) => {
  switch (action.type) {
    case 'toggleModalOn':
      return { ...state, on: true, config: action.config };

    case 'toggleModalOff':
      return { ...state, on: false };

    default:
      return state;
  }
};
*/