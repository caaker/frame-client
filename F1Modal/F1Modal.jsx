import { useSelector, useDispatch }         from   'react-redux';
import './F1Modal.css';
import M1                                 from   './M1.jsx';

// consider updating this to use useEffect
export default function F1Modal () {
  console.logD('DEBUG: L2 : F1-Modal');
  const dispatch = useDispatch();
  const on = useSelector(state => state.Modal.on);
  function offModalClick(event) {
    if(event.target === event.currentTarget) {
      dispatch({type: 'toggleModalOff'});
      dispatch({type: 'clearArticleForm'});
    }
  }
  on ? document.body.classList.add('modal-on') : document.body.classList.remove('modal-on');
  return (
    <div onClick={offModalClick} className={on ? 'modal_hold onModal' : 'modal_hold offModal'}>
      <M1/>
    </div>
  );
};