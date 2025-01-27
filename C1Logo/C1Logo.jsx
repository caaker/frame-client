import React, { useState }    from        'react';
import                                    './C1Logo.css';
import config                 from        '../F1Customize/config_all.js';

export default function Logo() {
  
  const [rotation, setRotation] = useState(true);
  
  function setOpacity() {
    if(rotation) {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .1)');
    } else {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .9)');
    }
  }
  
  function onClick() {
    setRotation(!rotation);
    setOpacity(rotation);
  }
  
  return (
    <img className='left-logo' id = {rotation ? 'rotate_01' : 'rotate_90'} onClick={onClick} src={config.logo}/>
  );

};
