import React, { useState }               from       'react';
import SVGMenu                           from       '../C0Vectors/SVGMenu.jsx';
import MenuBox                           from       './MenuBox.jsx';
import                                              './Menu.css';

export default () => {

  const [show, setShow] = useState(false);

  function clicked() {
    console.log('DEBUG: Menu clicked');
    setShow(!show);
  }

  return (
    <div id="menu_hold">
      <SVGMenu onClick={clicked} id='menu_top'/>
      {show && <MenuBox/>}
    </div>
  );

};
