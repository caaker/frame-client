import { useDispatch, useSelector }       from    'react-redux';
import                                            './C1Avatar.css';
import { SVGAvatar }                      from    '../C0Vectors/SVGAvatar.jsx';

export default function C1Avatar () {
  console.logD('DEBUG: L4 : F1-Apex-Right-Avatar');
  const dispatch = useDispatch();
  const pic = useSelector((state) => state.User.current.pic_url);
  const clicked = () => dispatch({ type: 'updateMenuPage', current: 'User' });
  return pic
    ? <img src={pic} onClick={clicked} className="user_pic" alt="avatar" />
    : <SVGAvatar fontSize="30px" onClick={clicked} className="user_pic light" />;

};