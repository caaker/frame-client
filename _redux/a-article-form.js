import { createSlice } from '@reduxjs/toolkit';
import { initial_state, test_state, makeData, isValid } from './a-article-form-aux';

export const ArticleForm = createSlice({
  name: 'articleForm',
  initialState: initial_state,
  reducers: {
    clearArticleForm: () => initial_state,
    testArticleForm: () => test_state,
    setArticleForm: (_, action) => makeData(action.payload),
    updateArticleForm: (state, action) => {
      const [name, value, valid] = action.payload;
      state[name] = { value, valid };
      state.valid = isValid(state);
    },
  },
});

export const { clearArticleForm, testArticleForm, setArticleForm, updateArticleForm } = ArticleForm.actions;
export default ArticleForm.reducer;