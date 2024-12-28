// import React, { useEffect, useState }   from 'react';
// import A1Clock                          from './A1Clock.css';
// import Clock                            from './Clock.jsx';
// import Weather                          from './Weather.jsx';
// import getPosition                      from './Location';

// /*

// Weather data is fetched from the openWeather every time the user clicks on the Station App

// However location is only updated once per hour to save resources.

// Need to have open weather api rate limited to once per hour to correlate with location API

// Also, if the user leaves the page open, we want to the location and weather to update once per hour

// */

// export default () => {
//   console.logD('DEBUG: L3 : F1-Page-Clock ');
//   const [lat, setLat] = useState(0);
//   const [lon, setLong] = useState(0);
//   getPosition().then((location)=>{
//     setLat(location.coords.latitude);
//     setLong(location.coords.longitude);
//   }).catch((error) =>{
//     console.error('DEBUG: navigator.geolocation error', error);
//   });

//   return (
//     <div className = "page_generic">
//       <div id='station'>
//         <Clock/>
//         <Weather lat={lat} lon={lon}/>
//       </div>
//     </div>
//   );
// };
