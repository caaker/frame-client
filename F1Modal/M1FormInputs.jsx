import React                          from  'react';
import { useSelector, useDispatch }   from  'react-redux';
import                                      './M1FormInputs.css';
import validate                       from  './Z1Validate.js';
import M10                            from  './M1FormInputsSingle.jsx';
import addDomain                      from  './Z1AddDomain.jsx';
import C1Copy                         from  '../C1Copy/C1Copy.jsx';


export default () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ArticleForm);

  function onChange(event) {
    const { name, value } = event.target;
    const valid = validate(name, value);
    dispatch({type: 'updateArticleForm', data: [name, value, valid]});
    addDomain(name, value, dispatch);
  }

  return (
    <span>
      <M10 valid = {data.link.valid}      value = {data.link.value}    onChange={onChange} className = 'modal_article_input' placeholder="link"    name="link" />
      { true &&
      <div className='modal_admin_inputs'>
        <M10 valid={data.image.valid}     value = {data.image.value}   onChange={onChange} className = 'modal_article_input' placeholder="image"   name="image" />
        <M10 valid={data.title.valid}     value = {data.title.value}   onChange={onChange} className = 'modal_article_input' placeholder="title"   name="title" />
        <M10 valid={data.summary.valid}   value = {data.summary.value} onChange={onChange} className = 'modal_article_input' placeholder="summary" name="summary" />
        <M10 valid={data.tag.valid}       value = {data.tag.value}     onChange={onChange} className = 'modal_article_input' placeholder="tag"     name="tag" />
        <M10 valid={data.domain.valid}    value = {data.domain.value}  onChange={onChange} className = 'modal_article_input' placeholder="domain"  name="domain" readonly = {true} />
        {!!data.title.value && <C1Copy className='c1_copy_modal' title={data.title.value}/>}
      </div>
      }
    </span>
  );
};
