import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';

export default () => {

  function makeOutput() {
    return <p>I am a page and an app template</p>
  }

  console.logD('DEBUG: L3 : F1-Page-Template ');
  return (
    <div id = "page_template">
      {makeOutput()}
    </div>
  );
};
