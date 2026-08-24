// file not currently used - bookmarks are derived from articles
import { createSlice } from '@reduxjs/toolkit';
const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: { bookmarks: false},
  reducers: {
    initializeBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },
  },
});
export const { initializeBookmarks } = bookmarksSlice.actions;
export const Bookmarks = bookmarksSlice.reducer;