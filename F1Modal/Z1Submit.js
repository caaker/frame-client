import Helper                 from '../F1All/class.Helper.js';
const exp = {};
const BASE = Helper.getBaseURL();

exp.post = function(article, dispatch) {
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(article)
  };
  Helper.fetchJSON(`${BASE}/articles/add`, options, (response) => {
    dispatch({type: 'addArticle', new_article: response});
  });
};

exp.put = function(article, dispatch) {
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(article)
  };
  Helper.fetchJSON(`${BASE}/articles/put/${encodeURIComponent(article._id)}`, options, () => {
    dispatch({ type: 'updateArticle', new_article: article, index: article.index });
  });
};

export default exp;
