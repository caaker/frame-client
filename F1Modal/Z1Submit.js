import Helper                 from '../F1Helper/class.Helper.js';
const exp = {};

exp.post = function(state, dispatch) {
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(state)
  };
  Helper.fetchJSON('/articles/add', options, (response) => {
    dispatch({type: 'addArticle', new_article: response});
  });
};

exp.put = function(article_object, dispatch) {
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(article_object)
  };
  Helper.fetchJSON(`${Helper.getBaseURL()}/articles/put/${encodeURIComponent(article_object._id)}`, options, (response) => {
    dispatch({ type: 'updateArticle', new_article: article_object, index: article_object.index });
  });
};

export default exp;
