import { createSlice } from '@reduxjs/toolkit';

const setServerSlice = createSlice({
  name: 'server',
  initialState: { ready: false },
  reducers: {
    setServer: (state, action) => {
      state.ready = action.payload;
    },
  },
});

export const { setServer } = setServerSlice.actions;
export const Server = setServerSlice.reducer;