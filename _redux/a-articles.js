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