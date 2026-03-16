import { useState }           from        'react';
import                                    './C1Logo.css';
import config                 from        '../F1Customize/config_all.js';

export default function C1Logo() {
  
  // initial rotation state is 0 degrees
  const [rotation, setRotation] = useState(true);
  
  function setGlobalOpacity() {
    if (rotation) {
      document.documentElement.style.setProperty('--opa', 'var(--bg-white-10)');
    } else {
      document.documentElement.style.setProperty('--opa', 'var(--bg-white-90)');
    }
  }
  
  function onClick() {
    setGlobalOpacity(rotation);
    setRotation(!rotation);
  }
  
  return (
    <img className='left-logo' id = {rotation ? 'rotate_00' : 'rotate_90'} onClick={onClick} src={config.logo}/>
  );

};
