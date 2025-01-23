/*

Weather data is fetched from the openWeather every time the user clicks on the Station App

However location is only updated once per hour to save resources.

Need to have open weather api rate limited to once per hour to correlate with location API

Also, if the user leaves the page open, we want to the location and weather to update once per hour

*/

/*
  MDN - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  maximumAge - refers to how long a cached position can be used,
  timeout - maximum amount of time the device has to return a location
  enableHighAccuray - setting to true may result in slower response times ...
  and overrides maximumAge to 0
*/
