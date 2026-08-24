// use as go-by for other reducer files
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

// use named exports
export const { initializeUser } = userSlice.actions;
export const User = userSlice.reducer;