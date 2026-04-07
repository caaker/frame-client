import { initial_state, test_state, makeData, isValid } from './a-articles-aux';

export const Articles = (state = { articles: false }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'initializeArticles':
      newState.articles = action.articles;
      return newState;
    case 'addArticle':
      const newArticles1 = [...newState.articles];
      newArticles1.unshift(action.new_article);
      newState.articles = newArticles1;
      return newState;
    case 'updateArticle':
      const newArticles2 = [...newState.articles];
      newArticles2.splice(action.index, 1, action.new_article);
      newState.articles = newArticles2;
      return newState;
    case 'deleteArticle':
      const newArticles = [...newState.articles];
      newArticles.splice(action.index, 1);
      newState.articles = newArticles;
      return newState;
    default:
      return state;
  }
};

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

export const SearchInput = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'updateSearchInput':
      return { ...state, current: action.current };
    default:
      return state;
  }
};