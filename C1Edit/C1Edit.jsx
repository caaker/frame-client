import './C1Edit.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import SVGEdit from '../C0Vectors/SVGEdit.jsx';

export default function C1Edit({ article }) {
  const dispatch = useDispatch();
  function editClicked() {
    dispatch({ type: 'toggleModalOn', config: true });
    dispatch({ type: 'setArticleForm', data: article });
  }
  return <SVGEdit className="medd_edit" onClick={editClicked} />;
}
