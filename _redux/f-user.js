import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { current: false },
  reducers: {
    initializeUser: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { initializeUser } = userSlice.actions;
export const User = userSlice.reducer;