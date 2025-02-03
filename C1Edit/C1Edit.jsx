import React            from  'react';
import { useDispatch }  from  'react-redux';
import SVGEdit          from  '../C0Vectors/SVGEdit.jsx';
import                        './C1Edit.css';

export default function C1Edit({ article }) {
  const dispatch = useDispatch();

  function editClicked() {
    const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');
    if(!admin) {
      alert("You must be logged in as an administrator for this operation");
      return;
    }
    dispatch({ type: 'toggleModalOn', config: true });
    dispatch({ type: 'setArticleForm', data: article });
  }
  return <SVGEdit className="medd_edit" onClick={editClicked} />;
}
