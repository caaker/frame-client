import React                                from   'react';
import { useSelector, useDispatch }         from   'react-redux';
import './F1Modal.css';
import F1M1                                 from   './M1.jsx';

// primary purpose is to turn the modal on and off
export default function F1Modal () {
  console.logD('DEBUG: L2 : F1-Modal');

  const dispatch = useDispatch();
  const on = useSelector(state => state.Modal.on);

  // turn the modal off and clear the form by simply clicking off the modal
  function offModalClick(event) {
    if(event.target.className === 'modal_hold onModal') {
      dispatch({type: 'toggleModalOff'});
      dispatch({type: 'clearArticleForm'});
    }
  }

  // move to useEffect later
  on ? document.body.classList.add('modal-on') : document.body.classList.remove('modal-on');

  return (
    <div onClick={offModalClick} className={on ? 'modal_hold onModal' : 'modal_hold offModal'}>
      <F1M1/>
    </div>
  );
};