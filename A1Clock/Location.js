// age is 1 hour, timeout for request is never, no high accuracy needed for now
const defaults = {
  maximumAge: 3600000,
  timeout: Infinity,
  enableHighAccuracy: false
};

function getPosition(resolve, reject, options = defaults) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}

module.exports = getPosition;
