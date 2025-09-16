import './C1Favicon.css';

import React from 'react';

export default function C1Favicon (props) {

  // does not fire on a "404 error", as this is a valid response that shows up as an error in the console
  function errorHandler (event) {
    event.target.src = '/images/medical-symbol.jpeg';
    console.logD('DEBUG: Google Favicon API: failed', 'red');
  }

  return (
    <img className={props.className} 
      src={'https://www.google.com/s2/favicons?domain=' + props.domain}
      onError={errorHandler}
    />
  );
};
