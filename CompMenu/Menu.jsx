import React                             from     'react';
import { useDispatch, useSelector }      from     'react-redux';

import SVGMenu                           from     '../C0Vectors/SVGMenu.jsx';
import MenuBox                           from     './MenuBox.jsx';
import                                            './Menu.css';

export default () => {
  
  const dispatch = useDispatch();
  const menu_on = useSelector((state)=>state.MenuPage.on);
  
  function menuClicked() {
    setTimeout(dispatchIt, 100);
  }
  
  function dispatchIt() {
    dispatch({type: 'toggleMenuPage'})
  }
  
  return (
    <div id="menu_hold">
      <SVGMenu onClick={menuClicked} id='menu_top'/>
      {menu_on && <MenuBox/>}
    </div>
  );

};
