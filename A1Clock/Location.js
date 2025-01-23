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
