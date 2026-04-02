import { useDispatch, useSelector }      from     'react-redux';
import { SVGMenu }                       from     '../C0Vectors/SVGMenu.jsx';
import MenuBox                           from     './MenuBox.jsx';
import                                            './C1MenuRight.css';

export default function C1MenuRight() {
  const dispatch = useDispatch();
  const menu_on = useSelector((state) => state.MenuPage.on);
  const menuClicked = () => dispatch({ type: 'toggleMenuPage' });
  return (
    <>
      <SVGMenu onClick={menuClicked} id="menu_top" />
      {menu_on && <MenuBox />}
    </>
  );
}