import { createSlice } from '@reduxjs/toolkit';

// name property is never used in code, only internally, lowercase is convention
const userSlice = createSlice({
  name: 'user',
  initialState: { current: false },
  reducers: {
    initializeUser: (state, action) => {
      console.log('initializeUser');
      state.current = action.payload;
    },
  }
});

export const { initializeUser } = userSlice.actions;
export const User = userSlice.reducer;