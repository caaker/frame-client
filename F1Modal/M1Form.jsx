import                                './M1Form.css';
import { useSelector, useDispatch }   from 'react-redux';

import M1FormInputs                   from './M1FormInputs.jsx';
import M1FormButton                   from './M1FormButton.jsx';
import Submit                         from './Z1Submit.js';
import makeObject                     from './M1FormHelper.js';

export default function M1Form () {
  console.logD('DEBUG: L4 : F1-Modal-M1-Form ');

  const dispatch = useDispatch();
  const article_form = useSelector((state) => state.ArticleForm) || {};
  const config = useSelector((state) => state.Modal.config);

  function onSubmit(event) {
    event.preventDefault();
    if(article_form.valid) {
      dispatch({type: 'clearArticleForm'});
      dispatch({type: 'toggleModalOff'});
      if(config) {

        console.logD('DEBUG: articled edited-try 0');
        console.log(article_form);
    
        Submit.put(makeObject(article_form), dispatch);
        alert('Article Edited.  Thank you.');
      } else {
        Submit.post(makeObject(article_form), dispatch);
        alert('Article Created.  Thank you.');
      }
    } else {
      alert('Form has errors.  Please correct.');
    }
  }
  return (
    <form autoComplete="off" className='modal-form' onSubmit = {onSubmit}>
      <M1FormInputs />
      <M1FormButton config={config}/>
    </form>
  );
};
