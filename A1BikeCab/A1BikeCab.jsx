// css
import                      './A1BikeCab.css';

// npm dependencies
import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';

export default () => {

  console.logD('DEBUG: L3 : F1-Page-Bike');

  // render the page with articles
  return (

    <div id = "page_bike_cab">

      <div className='whitebox'>

        <p className="bike2">Welcome to BikeCab.</p>

        <p className="bike2">Stay connected and safer with fellow riders.</p>

        <p className="bike2">Drive safe.</p>

      </div>

    </div>
  );
};
