/*
import { initial_state, test_state, makeData, isValid } from './a-article-form-aux';
export const ArticleForm = (state = initial_state, action) => {
  switch (action.type) {
    case 'clearArticleForm':
      return initial_state;
    case 'testArticleForm':
      return test_state;
    case 'setArticleForm':
      return makeData(action.data);
    case 'updateArticleForm':
      let newState = { ...state };
      const [name, value, valid] = action.data;
      newState[name] = { value, valid };
      newState.valid = isValid(newState);
      return newState;
    default:
      return state;
  }
};
*/

import { createSlice } from '@reduxjs/toolkit';
import { initial_state, test_state, makeData, isValid } from './a-article-form-aux';

export const articleSlice = createSlice({
  name: 'articleForm',
  initialState: initial_state,
  reducers: {
    clearArticleForm: () => initial_state,
    testArticleForm: () => test_state,
    setArticleForm: (state, action) => makeData(action.payload),
    updateArticleForm: (state, action) => {
      const [name, value, valid] = action.payload;
      state[name] = { value, valid };
      state.valid = isValid(state);
    },
  },
});

export const { clearArticleForm, testArticleForm, setArticleForm, updateArticleForm } = articleSlice.actions;
export default articleSlice.reducer;