import { createSlice } from '@reduxjs/toolkit';
import config from '../F1All/config_all.js';
export const menuPageSlice = createSlice({
  name: 'menuPage',
  initialState: { current: config.start_page, on: false },
  reducers: {
    updateMenuPage: (state, action) => { state.current = action.payload; },
    toggleMenuPageOff: (state) => { state.on = false; },
    toggleMenuPage: (state) => { state.on = !state.on; }
  }
});
export const { updateMenuPage, toggleMenuPageOff, toggleMenuPage } = menuPageSlice.actions;
export const MenuPage = menuPageSlice.reducer;