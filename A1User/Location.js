/*
  MDN - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  maximumAge - refers to how long a cached position can be used,
  timeout - maximum amount of time the device has to return a location
  enableHighAccuray - setting to true may result in slower response times ...
  and overrides maximumAge to 0
*/

// update to cache for 1 week
let maximumAge = 6000;
let timeout = Infinity;
let enableHighAccuracy = false;

/*
// when user selects an update, allow no caching, infinite wait time for response
maximumAge = 0
timeout = Infinity
enableHighAccuracy = false
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