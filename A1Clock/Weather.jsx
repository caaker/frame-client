import React, { useEffect, useState } from 'react';
const openweather = '78fd50d70e6c6a18205f31af5ff95107';
console.logD('DEBUG: L4 : F1-Page-Clock-Weather ');

const Weather = ({lat, lon}) => {

  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=imperial&appid=${ openweather }`)
        .then(response => response.json())
        .then(json => {
          setWeatherData(json)
        });
    };

    const fetchAir = () => {
      fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${ lat }&lon=${ lon }&units=imperial&appid=${ openweather }`)
        .then(response => response.json())
        .then(json => {
          setAirData(json);
        });
    };

    if(!(lat && lon)) {
      lat = 30.2827813;
      lon = -97.7384504;
    } 
    fetchData();
    fetchAir();
    
  }, [lat, lon]);  // runs on mount and if lat or lon changes on a re-render

  return (
    <div id="box_weather">
      {weatherData && airData && (
        <>
          <img id="image_weather" src={`http://openweathermap.org/img/w/${ weatherData.weather[0].icon }.png`} />
          <p id="box_weather_inner">{Math.round(weatherData.main.temp)}°</p>
          <p id="box_air_inner">Air Quality: {airData.list[0].main.aqi}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
