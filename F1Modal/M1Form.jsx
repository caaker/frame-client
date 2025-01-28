import './M1Form.css';
import React                          from 'react';
import { useSelector, useDispatch }   from 'react-redux';
import M1FormInputs                   from './M1FormInputs.jsx';
import M1FormButton                   from './M1FormButton.jsx';
import Submit                         from './Z1Submit.js';

export default () => {
  const dispatch = useDispatch();
  const article_form = useSelector((state) => state.ArticleForm) || {};
  const config = useSelector((state) => state.Modal.config);

  function onSubmit() {
    event.preventDefault();
    if(article_form.valid) {
      dispatch({type: 'clearArticleForm'});
      dispatch({type: 'toggleModalOff'});
      if(config) {
        Submit.put(makeObject(), dispatch);
      } else {
        Submit.post(makeObject(), dispatch);
      }
      alert('Form submitted.  Thank you.');
    } else {
      alert('Form has errors.  Please correct.');
    }
  }

  function makeObject() {
    const res = {};
    res.link = article_form.link.value;
    res.image = article_form.image.value;
    res.title = article_form.title.value;
    res.summary = article_form.summary.value;
    res.tag = article_form.tag.value;
    res.domain = article_form.domain.value;

    // comment this later
    if(article_form._id) {
      res._id = article_form._id.value;
    }
    if(article_form.index) {
      res.index = article_form.index.value;
    }
    return res;
  }

  return (
    <form autoComplete="off" className='modal-form' onSubmit = {onSubmit}>
      <M1FormInputs />
      <M1FormButton config={config}/>
    </form>
  );

};