import { createSlice } from '@reduxjs/toolkit';
export const ArticlesSlice = createSlice({
  name: 'articles',
  initialState: { articles: false },
  reducers: {
    initializeArticles: (state, action) => { state.articles = action.payload; },
    addArticle: (state, action) => { state.articles.unshift(action.payload); },
    updateArticle: (state, action) => {
      const { index, new_article } = action.payload;
      state.articles.splice(index, 1, new_article);
    },
    deleteArticle: (state, action) => {
      state.articles.splice(action.payload, 1);
    },
  },
});
export const { initializeArticles, addArticle, updateArticle, deleteArticle } = ArticlesSlice.actions;
export const Articles = ArticlesSlice.reducer;