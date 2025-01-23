import React, { useEffect, useState } from 'react';
// import { openweather } from '../private.js';

const Weather = ({lat, lon}) => {
  const [weatherData, setWeatherData] = useState(null);
  const openweather = '78fd50d70e6c6a18205f31af5ff95107';
  
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=imperial&appid=${ openweather }`)
        .then(response => response.json())
        .then(json => setWeatherData(json));
    };
    if(lat && lon) {
      fetchData();
    }
  }, [lat, lon]);


  let icon;

  if(weatherData) {
    // console.log(weatherData);
    // console.log(weatherData.weather[0].icon);
    icon = weatherData.weather[0].icon;
  }

  return (
    <div id="box_weather">
      {weatherData && (
        <>
          <img id="image_weather" src={`http://openweathermap.org/img/w/${ icon }.png`} />
          <p id="box_weather_inner">{Math.round(weatherData.main.temp)}°</p>
        </>
      )}
    </div>
  );
};

export default Weather;
