import fs from 'fs';

const url = "https://frame-server-x8qw.onrender.com/articles/get";

const controller = new AbortController();

const browser = {
  signal: controller.signal,
  headers: {

    // this agent mimics a modern Chrome browser, required when running from github actions
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache'
  }
}

async function fetchData(url) {
  try {
    const response = await fetch(url, browser);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('fetchData failed:', error.message);
    return null;
  }
}

const articles = await fetchData(url);
if (articles) {
  fs.writeFileSync('_dist/cache.txt', JSON.stringify(articles, null, 2));
  console.log('------------------------------------_dist/cache.txt updated!');
}
