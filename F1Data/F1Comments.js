/*
File protocol
  location.protocol === 'file:'
  no fetch access
  cache fallback

Local machine
  cors fetch access

Static
  cors fetch access

Broken
cache fallback

Notes
  Use location.hostname to retreive the domain

Removed
  const response = await fetch('cache.txt', options);
*/