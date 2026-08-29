import                                './M1Form.css';
import { useSelector, useDispatch }   from 'react-redux';
import M1FormInputs                   from './M1FormInputs.jsx';
import M1FormButton                   from './M1FormButton.jsx';
import Submit                         from './Z1Submit.js';
import makeObject                     from './M1FormHelper.js';
import { clearArticleForm }           from '../_redux/a-article-form';
import { toggleModalOff }             from '../_redux/f-modal';
import { LSaddArticle }               from  '../F1LS/F1LSArticles.js';


export default function M1Form () {
  const dispatch = useDispatch();
  const article_form = useSelector((state) => state.ArticleForm) || {};
  const config = useSelector((state) => state.Modal.config);

  function onSubmit(event) {
    event.preventDefault();
    if (!article_form.valid) return alert('Form has errors. Please correct.');
    dispatch(clearArticleForm());
    dispatch(toggleModalOff());
    const payload = makeObject(article_form);
    if(config) {
      Submit.put(payload, dispatch);
    } else {
      Submit.post(payload, dispatch);
      LSaddArticle(payload);
    }
    alert('Action completed.  Thank you.');
  }

  return (
    <form autoComplete="off" className='modal-form' onSubmit = {onSubmit}>
      <M1FormInputs />
      <M1FormButton config={config}/>
    </form>
  );
};
