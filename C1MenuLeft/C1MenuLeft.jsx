import { useDispatch }     from     'react-redux';
import { SVGMenuBurger }   from     '../C0Vectors/SVGMenuBurger.jsx';
import                              './C1MenuLeft.css';
import { toggleMenuLeft } from      '../_redux/f-menuleft.js';


export default function C1MenuLeft() {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleMenuLeft());
  return (
    <SVGMenuBurger onClick={handleClick} id='menu_left_svg'/>
  );
};