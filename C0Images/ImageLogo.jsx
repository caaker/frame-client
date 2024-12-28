import React, { useState } from 'react';
import './ImageLogo.css';
import config             from      '../F1Customize/config_all.js';


export default function(props) {

  // also used as a favicon - config.favicon
  // const logo = props.path || '/images/favicon-wheel.png';
  const logo = props.path || config.favicon;
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
