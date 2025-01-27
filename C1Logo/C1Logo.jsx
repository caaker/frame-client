import React, { useState } from       'react';
import                                './C1Logo.css';
import config              from       '../F1Customize/config_all.js';


export default function() {

  const logo = config.logo;

  const [on, toggle] = useState(true);
  
  function onClick() {
    if(on) {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .1)');
    } else {
      document.documentElement.style.setProperty('--opa', 'rgba(255, 255, 255, .9)');
    }
    toggle(!on);
  }

  return (
    <img className='left-logo' id = {on ? 'rotate_01' : 'rotate_90'} onClick={onClick} src={logo}/>
  );

};
