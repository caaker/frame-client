import React                             from     'react';
import { useDispatch, useSelector }      from     'react-redux';

import                                            './Menu.css';

import SVGMenu                           from     '../C0Vectors/SVGMenu.jsx';
import MenuBox                           from     './MenuBox.jsx';

export default () => {
  
  const dispatch = useDispatch();
  const menu_on = useSelector((state)=>state.MenuPage.on);
  
  function menuClicked() {
    dispatch({type: 'toggleMenuPage'})
  }
  
  return (
    <div id="menu_hold">
      <SVGMenu onClick={menuClicked} id='menu_top'/>
      {menu_on && <MenuBox/>}
    </div>
  );

};
