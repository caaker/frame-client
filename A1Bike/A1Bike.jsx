// css
import                      './A1Bike.css';

// npm dependencies
import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';

export default () => {

  console.logD('DEBUG: L3 : F1-Page-Bike');

  // render the page with articles
  return (
    <div id = "page_bike">

      <div className='whitebox'>

        <p className="bike_fix_1">Your professional bike shop,</p>

        <p className="bike_fix_1">on wheels.</p>

        <p className="bike_fix_2">We come directly to you.</p>

        <p className="bike_fix_2">Call us at 347.933.2910.</p>

      </div>

    </div>
  );
};
