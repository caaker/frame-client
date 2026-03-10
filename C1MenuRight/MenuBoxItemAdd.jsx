import { useDispatch } from 'react-redux';

export default function MenuBoxItemAdd (props) {
  const dispatch = useDispatch();
  function menuItemClicked() {
    dispatch({type: 'toggleModalOn', config: false});
    dispatch({type: 'toggleMenuPageOff'});
  }
  return (
    <span className="menu_holder" onClick={menuItemClicked}>
      {props.children}
      <p className='menu_name'>{props.name}</p>
    </span>
  );
};