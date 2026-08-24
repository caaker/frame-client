import { useDispatch }       from 'react-redux';
import { toggleModalOff }    from '../_redux/f-modal';


export default function MenuBoxItemAdd (props) {
  const dispatch = useDispatch();
  function menuItemClicked() {
    dispatch(toggleModalOn(false));
    dispatch({type: 'toggleMenuPageOff'});
  }
  return (
    <span className="menu_holder" onClick={menuItemClicked}>
      {props.children}
      <p className='menu_name'>{props.name}</p>
    </span>
  );
};