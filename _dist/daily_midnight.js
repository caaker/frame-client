import fs from 'fs';
const url = "https://frame-server-x8qw.onrender.com/articles/get";

async function fetchData(url) {
  try {
    const response = await fetch(url);
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
  console.log('_dist/cache.txt updated!')
}

function retreiveImages() {
  return articles.map(article => article.image);
}
