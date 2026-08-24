import { useDispatch }                        from 'react-redux';
import './MenuBoxItem.css';
import { updateMenuPage, toggleMenuPageOff }  from    '../_redux/f-menu';


// name is displayed on the menu and used by dispatch
export default function MenuBoxItem ({name, children}) {
  const dispatch = useDispatch();

  function menuItemClicked() {
    dispatch(updateMenuPage(name));
    dispatch(toggleMenuPageOff());  
  }

  return (
    <span className="menu_holder" onClick={menuItemClicked}>
      {children}
      <p className='menu_name'>{name}</p>
    </span>
  );
};
