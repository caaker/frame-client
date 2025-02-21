import React, { useState }    from        'react';
import                                    './C1Logo.css';
import config                 from        '../F1Customize/config_all.js';

export default function Logo() {
  
  // initial rotation state is 0 degrees
  const [rotation, setRotation] = useState(true);
  
  // on each click we toggle the global opacity
  function setGlobalOpacity() {
    if(rotation) {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .1)');
    } else {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .9)');
    }
  }
  
  function onClick() {
    setGlobalOpacity(rotation);

    // toggle the rotation state
    setRotation(!rotation);
  }
  
  return (
    <img className='left-logo' id = {rotation ? 'rotate_00' : 'rotate_90'} onClick={onClick} src={config.logo}/>
  );

};
