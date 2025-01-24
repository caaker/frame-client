import React, { useEffect, useState }           from 'react';
import getLocation                              from './Location';
import A1Station                                from './A1Station.css';
import StationClock                             from './StationClock.jsx';
import StationWeather                           from './StationWeather.jsx';
import StationAir                               from './StationAir.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Page-Station ', '#888888');
  const [lat, setLat] = useState(30.2827813);
  const [lon, setLong] = useState(-97.7384504);

  getLocation().then((location)=>{
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
    console.logD('DEBUG: navigator.geolocation: location found ' + location.coords.latitude, '#888888');
  }).catch((error) =>{
    console.logD('DEBUG: navigator.geolocation error: no access to location', 'red');
    console.logD('DEBUG: using default location of Austin', 'red');
  });

  return (
    <div className = "page_generic">
      <div id='station'>
        <div id="box_weather">
            <StationClock/>
            <StationWeather lat={lat} lon={lon}/>
            <StationAir lat={lat} lon={lon}/>
        </div>
      </div>
    </div>
  );
};
