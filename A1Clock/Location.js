/*
  MDN - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  maximumAge - refers to how long a cached position can be used,
  timeout - maximum amount of time the device has to return a location
  enableHighAccuray - setting to true may result in slower response times ...
  and overrides maximumAge to 0
*/

// location updated every hour
let maximumAge = 3600000;
let timeout = Infinity;
let enableHighAccuracy = false;

/*
// when user selects an update, allow no caching, infinite wait time for response
maximumAge = 0
*/

const defaults = {
  maximumAge: maximumAge,
  timeout: timeout,
  enableHighAccuracy: enableHighAccuracy
};

function getPosition(resolve, reject, options = defaults) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}

module.exports = getPosition;


/*
    Austin
      let lat = 30.2666;
      let lon = -97.7333;
*/