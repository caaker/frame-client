import { useEffect, useState } from 'react';
import Helper from '../F1Helper/class.Helper.js';

export default function StationWeather({ lat, lon }) {
  const [weatherData, setWeatherData] = useState(null);
  const baseURL = Helper.getBaseURL();

  useEffect(() => {
    Helper.fetchJSON(`${baseURL}/api_openweather/weather?lat=${lat}&lon=${lon}`, null, ()=> {
      setWeatherData(json);
      console.log(json);
    });
  }, [lat, lon]);

  if (!weatherData) return null;

  return (
    <>
      <img
        id="image_weather"
        src={`https://openweathermap.org/img/w/${weatherData.weather[0]}.png`}
        alt="Weather Icon"
      />
      <p id="box_weather_inner">{Math.round(weatherData.main)}°</p>
    </>
  );
}