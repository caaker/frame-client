import { createSlice } from '@reduxjs/toolkit';

const serverSlice = createSlice({
  name: 'server',
  initialState: { 
    ready: false, 
    heartbeat: 0 
  },
  reducers: {
    setServer: (state, action) => {
      const { ready, heartbeat } = action.payload;
      state.ready = ready;
      state.heartbeat = heartbeat;
    },
  },
});

export const { setServer } = serverSlice.actions;
export const Server = serverSlice.reducer;