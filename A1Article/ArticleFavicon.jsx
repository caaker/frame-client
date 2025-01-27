import React from 'react';

export default (props) => {

  // never fires even when the Google API returns a 404 error
  function errorHandler (event) {
    event.target.src = '/images/medical-symbol.jpeg';
    console.logD('DEBUG: Google Favicon API: failed', red);
  }

  return (
    <img className={props.className} 
    src={'https://www.google.com/s2/favicons?domain=' + props.domain}
    onError={errorHandler}
    />
  );
};
