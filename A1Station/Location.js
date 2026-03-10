const defaults = {
  maximumAge: 3600000,
  timeout: Infinity,
  enableHighAccuracy: false
};

function getLocation(options = defaults) {
  return new Promise((resolveInternal, rejectInternal) =>
    navigator.geolocation.getCurrentPosition(resolveInternal, rejectInternal, options)
  );
}

export default getLocation;

/*
  MDN - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    maximumAge - refers to how long a cached position can be used; default is 0
    timeout - maximum amount of time the device has to return a location; default is Infinity
    enableHighAccuray - trades off accuracy for power consumption; default is false
*/