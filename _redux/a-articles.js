import {initial_state, test_state, makeData, isValid} from './a-articles-aux';

// holds json data for all articles
const Articles = (state = {articles: false}, action) => {
  let newState = { ...state };
  switch(action.type) {

    // called by initial page load by Data component
    case 'initializeArticles':
      newState.articles = action.articles;
      return newState;

    // called by F1Modal Submission function for creating
    case 'addArticle':
      const newArticles1 = [...newState.articles];
      newArticles1.unshift(action.new_article);
      newState.articles = newArticles1;
      return newState;

    // called by F1Modal Submission function for updating
    case 'updateArticle':
      const newArticles2 = [...newState.articles];
      newArticles2.splice(action.index, 1, action.new_article);
      newState.articles = newArticles2;
      return newState;

    // called by the delete SVG component to delete component at action.index
    case 'deleteArticle':
      const newArticles = [...newState.articles];
      newArticles.splice(action.index, 1);
      newState.articles = newArticles;
      return newState;
  }

  // no change, return the previous state
  return state;
};


// controlled form holds data for the article modal
const ArticleForm = (state = initial_state, action) => {
  switch(action.type) {

    // when closing the modal or submitting the modal; reset the inputs
    case 'clearArticleForm':
      return initial_state;

    // implemented in M1Form to quickly populate the form for test purposes
    case 'testArticleForm':
      return test_state;

    //  called by edit SVG component in Article component
    case 'setArticleForm':
      return makeData(action.data);

    // called in M1FormInputs, a controlled form
    case 'updateArticleForm':
      let newState = { ...state };
      const [name, value, valid] = action.data; 
      newState[name] = {value, valid};
      newState.valid = isValid(newState);
      return newState;
  }
  return state;
};

// object is used for possible future updates to search
const SearchInput = (state = { current: '' }, action) => {
  switch (action.type) {
    case 'updateSearchInput':
      return { ...state, current: action.current };
  }
  return state;
};

export default {
  Articles,
  ArticleForm,
  SearchInput
};
