import React                          from  'react';
import { useSelector, useDispatch }   from  'react-redux';

import                                      './M1FormInputs.css';

import M10                            from  './M1FormInputsSingle.jsx';
import C1Copy                         from  '../C1Copy/C1Copy.jsx';

import addDomain                      from  './Z1AddDomain.jsx';
import validate                       from  './Z1Validate.js';


// this file is a controlled form that delegates validation, style is broken purposefully
export default function M1FormInputs() {
  console.logD('DEBUG: L5 : F1-Modal-M1-Form-Inputs');
  const dispatch = useDispatch();
  const d1 = useSelector((state) => state.ArticleForm);

  function oC(event) {
    const { name, value } = event.target;
    const valid = validate(name, value);
    dispatch({type: 'updateArticleForm', data: [name, value, valid]});
    addDomain(name, value, dispatch);
  }

  return (

<span>
  <M10 valid = {d1.link.valid}      value = {d1.link.value}    onChange={oC} className = 'm_a_input' placeholder="link"    name="link" />
  <div className='modal_admin_inputs'>
    <M10 valid={d1.image.valid}     value = {d1.image.value}   onChange={oC} className = 'm_a_input' placeholder="image"   name="image" />
    <M10 valid={d1.title.valid}     value = {d1.title.value}   onChange={oC} className = 'm_a_input' placeholder="title"   name="title" />
    <M10 valid={d1.summary.valid}   value = {d1.summary.value} onChange={oC} className = 'm_a_input' placeholder="summary" name="summary" />
    <M10 valid={d1.tag.valid}       value = {d1.tag.value}     onChange={oC} className = 'm_a_input' placeholder="tag"     name="tag" />
    <M10 valid={d1.domain.valid}    value = {d1.domain.value}  onChange={oC} className = 'm_a_input' placeholder="domain"  name="domain" readonly = {true} />
    {!!d1.title.value && <C1Copy className='c1_copy_modal' title={d1.title.value}/>}
  </div>
</span>

  );
};
