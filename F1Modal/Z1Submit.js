import Helper                 from '../F1Customize/class.Helper.js';
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
    const send = {
      type: 'updateArticle',
      new_article: article_object,
      index: article_object.index
    }
    dispatch(send);  
  });

};


export default exp;




























  // const options = {
  //   headers: {'Content-Type': 'application/json'},
  //   method: 'POST',
  //   body: JSON.stringify(state)
  // };
  // fetch('/articles/add', options)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     dispatch({type: 'addArticle', new_article: response});
  //   })
  //   .catch((error) => {
  //     console.logD('DEBUG: Z1Submit: articles/add failed', 'red');
  //   });


  // const options = {
  //   headers: {'Content-Type': 'application/json'},
  //   method: 'PUT',
  //   body: JSON.stringify(article_object)
  // };
  // fetch('/articles/put/' + encodeURIComponent(article_object._id), options)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     const send = {
  //       type: 'updateArticle',
  //       new_article: article_object,
  //       index: article_object.index
  //     }
  //     dispatch(send);
  //   })
  //   .catch((error) => {
  //     console.logD('DEBUG: Z1Submit: articles/put failed', 'red');
  //   });