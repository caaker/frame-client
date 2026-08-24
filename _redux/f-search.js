import { createSlice } from '@reduxjs/toolkit';
export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: { current: '' },
  reducers: {
    updateSearchInput: (state, action) => {
      state.current = action.payload;
    },
  },
});
export const { updateSearchInput } = searchInputSlice.actions;
export const SearchInput = searchInputSlice.reducer;