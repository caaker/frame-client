// age is 1 hour, timeout for request is never, no high accuracy needed for now

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

module.exports = getLocation;

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
