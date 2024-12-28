/*
  MDN - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    maximumAge - refers to how long a cached position can be used; default is 0
    timeout - maximum amount of time the device has to return a location; default is Infinity
    enableHighAccuray - trades off accuracy for power consumption; default is false
*/

let maximumAge = 0;
let timeout = Infinity;
let enableHighAccuracy = false;

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