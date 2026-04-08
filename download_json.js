import fs from 'fs';
import path from 'node:path';

const inputUrl = "https://frame-server-x8qw.onrender.com/articles/get";
const outputPath = path.join(process.cwd(), '_public-vite', 'cache.txt');

const browser = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache'
  }
};

async function fetchData(fetch_url) {
  try {
    const response = await fetch(fetch_url , browser);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('fetchData failed:', error.message);    
    return null;
  }
}

const articles = await fetchData(inputUrl);
if (articles) {
  fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));
  console.log("download_json script succeeded");
  console.log("_public-vite/cache.txt udpated");
}