import { useEffect, useState }                  from 'react';
import getLocation                              from './Location';
import StationClock                             from './StationClock.jsx';
import StationWeather                           from './StationWeather.jsx';
import StationAir                               from './StationAir.jsx';
import                                          './A1Station.css';


export default function A1Station() {
  console.logD('DEBUG: L3 : F1-Page-Station ', '#888888');

  // default location is Austin, TX
  const [lat, setLat] = useState(30.2827813);
  const [lon, setLong] = useState(-97.7384504);

  getLocation().then((location)=>{
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
    console.logD('DEBUG: navigator.geolocation: location found ' + location.coords.latitude, '#888888');
  }).catch((error) =>{
    console.logD('DEBUG: navigator.geolocation error: no access to location', 'red');
    console.logD('DEBUG: using default location for Austin - lat - 30.2827813', 'red');
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
