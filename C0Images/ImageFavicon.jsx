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
    
  // fails to detect 404 errors in the console
  // function preloadImage(src) {
  //   const img = new Image();
  //   img.src = 'https://www.google.com/s2/favicons?domain=' + props.domain;
  //   console.logD('BALLS', 'purple');
  //   img.onerror = (event) => {
  //     event.preventDefault();
  //     console.logD('BALLS FAILED', red);
  //   };  
  // }


  // chatgpt idea is not so good
  // async function preloadImage(src, fallbackSrc) {
  //   try {
  //     const response = await fetch(src, { method: 'HEAD' });
  //     if (response.ok) {
  //       img.src = src;
  //       console.logD('BALLS-0', 'purple');
  //     } else {
  //       img.src = fallbackSrc;
  //       console.logD('BALLS-1', 'purple');
  //     }
  //   } catch (error) {
  //     img.src = fallbackSrc;
  //     console.logD('BALLS-2', 'purple');
  //   }
  // }
