import React, { useEffect, useState }       from 'react';
import Helper                               from '../F1Helper/class.Helper.js';

const openweather = '78fd50d70e6c6a18205f31af5ff95107';
console.logD('DEBUG: L4 : F1-Page-Clock-Weather ');

const StationWeather = ({lat, lon}) => {
  const [weatherData, setWeatherData] = useState(null);

  // runs on mount and if lat or lon changes
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=imperial&appid=${ openweather }`;
    Helper.fetchJSON(url , null, (json) => {
      setWeatherData(json)
    });

  }, [lat, lon]);

  return (
      <>
        {weatherData && (
          <>
            <img
              id="image_weather"
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <p id="box_weather_inner">{Math.round(weatherData.main.temp)}°</p>
          </>
        )}
      </>
  );
};

export default StationWeather;