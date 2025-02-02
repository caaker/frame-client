import React from 'react';
import './MenuBoxItem.css';
import { useDispatch } from 'react-redux';

// props.name is displayed on the menu and used by dispatch
export default (props) => {
  const dispatch = useDispatch();

  function menuItemClicked() {
    dispatch({type: 'updateMenuPage', current: props.name });
    dispatch({type: 'toggleMenuPageOff'});
  }

  return (
    <span className="menu_holder" onClick={menuItemClicked}>
      {props.children}
      <p className='menu_name'>{props.name}</p>
    </span>
  );
};
