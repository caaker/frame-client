import { useEffect, useState }      from 'react';
import Helper                       from '../F1Helper/class.Helper.js';

export default function A1Station({lat, lon}) {

  console.logD('DEBUG: L4 : F1-Page-Station-Air ');

  const [airData, setAirData] = useState(null);
  const baseURL = Helper.getBaseURL();

  useEffect(() => {
    const url = `${baseURL}/api_openweather/air?lat=${ lat }&lon=${ lon }`;
    Helper.fetchJSON(url, null, (json) => {
      setAirData(json);
    });
  }, [lat, lon]);

  return airData?.list && (
    <p id="box_air_inner">Air Quality: {airData.list[0].main.aqi}</p>
  );
};