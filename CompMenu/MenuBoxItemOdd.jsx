import React from 'react';
import { useDispatch } from 'react-redux';

export default (props) => {
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch({type: 'toggleModalOn'});
    dispatch({type: 'toggleMenuPageOff'});
  }
  return (
    <span className="menu_holder" onClick={clickHandler}>
      {props.children}
      <p className='menu_name'>{props.name}</p>
    </span>
  );
};
