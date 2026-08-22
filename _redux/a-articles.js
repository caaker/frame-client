import { createSlice } from '@reduxjs/toolkit';
import { initial_state, test_state, makeData, isValid } from './a-articles-aux';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: { articles: false },
  reducers: {
    initializeArticles: (state, action) => {
      state.articles = action.payload;
    },
    addArticle: (state, action) => {
      if (state.articles) {
        state.articles.unshift(action.payload);
      }
    },
    
    updateArticle: (state, action) => {
      const { index, article } = action.payload;
      if (state.articles && state.articles[index]) {
        state.articles[index] = article;
      }
    },
    deleteArticle: (state, action) => {
      if (state.articles) {
        state.articles.splice(action.payload, 1);
      }
    },
  },
});

const articleFormSlice = createSlice({
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

export const { initializeArticles, addArticle, updateArticle, deleteArticle } = articlesSlice.actions;
export const Articles = articlesSlice.reducer;

export const { clearArticleForm, testArticleForm, setArticleForm, updateArticleForm } = articleFormSlice.actions;
export const ArticleForm = articleFormSlice.reducer;
