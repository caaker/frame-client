import { useDispatch, useSelector }       from    'react-redux';
import                                            './C1Avatar.css';
import { SVGAvatar }                      from    '../C0Vectors/SVGAvatar.jsx';
import { updateMenuPage }                 from    '../_redux/f-menu';

export default function C1Avatar () {
  const dispatch = useDispatch();
  const pic = useSelector((state) => state.User.current.pic_url);
  const clicked = () => dispatch(updateMenuPage('User'));
  return pic
    ? <img src={pic} onClick={clicked} className="user_pic" alt="avatar" />
    : <SVGAvatar onClick={clicked} className="user_pic" />;
};