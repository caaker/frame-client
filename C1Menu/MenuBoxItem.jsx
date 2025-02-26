import React from 'react';
import './MenuBoxItem.css';
import { useDispatch } from 'react-redux';

// name is displayed on the menu and used by dispatch
export default ({name, children}) => {
  const dispatch = useDispatch();

  function menuItemClicked() {
    dispatch({type: 'updateMenuPage', current: name });
    dispatch({type: 'toggleMenuPageOff'});
  }

  return (
    <span className="menu_holder" onClick={menuItemClicked}>
      {children}
      <p className='menu_name'>{name}</p>
    </span>
  );
};
