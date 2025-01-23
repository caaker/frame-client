import React, { useEffect, useState }   from 'react';
import A1Clock                          from './A1Clock.css';
import Clock                            from './Clock.jsx';
import Weather                          from './Weather.jsx';
import getPosition                      from './Location';


export default () => {
  console.logD('DEBUG: L3 : F1-Page-Clock ');
  const [lat, setLat] = useState(0);
  const [lon, setLong] = useState(0);
  getPosition().then((location)=>{
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
  }).catch((error) =>{
    console.error('DEBUG: navigator.geolocation error', error);
  });

  return (
    <div className = "page_generic">
      <div id='station'>
        <Clock/>
        <Weather lat={lat} lon={lon}/>
      </div>
    </div>
  );
};
