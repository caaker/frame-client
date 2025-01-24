import React, { useEffect, useState }       from 'react';
import Helper                               from '../F1Customize/class.Helper.js';

const openweather = '78fd50d70e6c6a18205f31af5ff95107';
console.logD('DEBUG: L4 : F1-Page-Clock-Weather ');

const StationAir = ({lat, lon}) => {

  const [airData, setAirData] = useState(null);

   useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${ lat }&lon=${ lon }&units=imperial&appid=${ openweather }`;
    Helper.fetchJSON(url , null, (json) => {
      setAirData(json)
    });

  }, [lat, lon]);  // runs on mount and if lat or lon changes on a re-render

  return (
    <>
      {airData && (
        <p id="box_air_inner">Air Quality: {airData.list[0].main.aqi}</p>
      )}
    </>
  );
};

export default StationAir;