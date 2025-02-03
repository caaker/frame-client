import                                    './C1Delete.css';
import React                        from  'react';
import { useDispatch }              from  'react-redux';
import SVGDelete                    from  '../C0Vectors/SVGDelete.jsx';
import Helper                       from  '../F1Customize/class.Helper.js';

export default function C1Delete({ article }) {
  const dispatch = useDispatch();

  function verifyDelete() {
    const id = encodeURIComponent(article._id);
    if (!confirm(`Are you sure you want to delete the article titled - '${article.title}'?`)) {
      return;
    }
    deleteClientArticle(article.index);
    deleteServerArticle(id);
  }

  function deleteClientArticle(index) {
    dispatch({ type: 'deleteArticle', index });
  }

  function deleteServerArticle(id) {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    Helper.fetchJSON(`${Helper.getBaseURL()}/articles/delete/${id}`, options);
  }

  return <SVGDelete className="medd_delete" onClick={verifyDelete} />;
}
