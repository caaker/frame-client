import { useEffect, useState } from 'react';
import Helper from '../F1Helper/class.Helper.js';

export default function StationWeather({ lat, lon }) {
  const [weatherData, setWeatherData] = useState(null);
  const baseURL = Helper.getBaseURL();

  useEffect(() => {
    const url = `${baseURL}/api_openweather/weather?lat=${lat}&lon=${lon}`;
    Helper.fetchJSON(url, null, setWeatherData);
  }, [lat, lon]);

  if (!weatherData) return null;

  const { temp } = weatherData.main;
  const { icon } = weatherData.weather[0];

  return (
    <>
      <img
        id="image_weather"
        src={`https://openweathermap.org/img/w/${icon}.png`}
        alt="Weather Icon"
      />
      <p id="box_weather_inner">{Math.round(temp)}°</p>
    </>
  );
}