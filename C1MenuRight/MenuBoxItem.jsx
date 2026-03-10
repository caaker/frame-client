import { useDispatch } from 'react-redux';
import './MenuBoxItem.css';

// name is displayed on the menu and used by dispatch
export default function MenuBoxItem ({name, children}) {
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
