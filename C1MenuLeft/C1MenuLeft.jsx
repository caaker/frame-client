import { useDispatch }     from     'react-redux';
import { SVGMenuBurger }   from     '../C0Vectors/SVGMenuBurger.jsx';
import                              './C1MenuLeft.css';


export default function C1MenuLeft() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: 'toggleMenuLeft' });
  };
  return (
      <SVGMenuBurger fontSize="30px" onClick={handleClick} id='menu_left_svg'/>
  );
};