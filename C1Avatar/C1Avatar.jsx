import React                          from    'react';
import { useDispatch, useSelector }   from    'react-redux';
import                                        './C1Avatar.css';
import SVGAvatar                      from    '../C0Vectors/SVGAvatar.jsx';

export default function C1Avatar (props) {
  console.logD('DEBUG: L4 : F1-Apex-Right-Avatar');
  const dispatch = useDispatch();
  const page = useSelector((state) => state.MenuPage.current);
  const UserCurrent = useSelector((state) => state.User.current);

  // implement1 - move this to reducer?
  function clicked() {
    if(page !== 'User') {
      dispatch({type: 'updateMenuPage', current: 'User' });
    }
  }
  const pic = UserCurrent.pic_url;
  let element;
  if(pic) {
    element = <img onClick = {clicked} className = 'user_pic' src = {pic} alt = 'avatar' />;
  } else {
    element = <SVGAvatar onClick = {clicked} className = 'user_pic light'/>;
  }
  return element;
};