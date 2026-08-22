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