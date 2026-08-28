import { LS } from './F1LS';
const ARTICLES_KEY = 'cached_articles';

/* START
*/

export function getArticles() {
  const cached = LS.get(ARTICLES_KEY);
  return cached && cached.articles ? cached.articles : [];
}

export function saveArticles(articles) {
  const payload = {
    timestamp: Date.now(),
    articles: articles
  };
  LS.set(ARTICLES_KEY, payload);
}

/* CRUD OPERATIONS
*/
export function LSdeleteArticle(articleId) {
  const cached = LS.get(ARTICLES_KEY) || { articles: [] };
  const updatedArticles = cached.articles.filter(article => article._id !== articleId);
  const payload = {
    timestamp: Date.now(),
    articles: updatedArticles
  };  
  LS.set(ARTICLES_KEY, payload);
}

export function LSaddArticle(newArticle) {
  const cached = LS.get(ARTICLES_KEY) || { articles: [] };
  const payload = {
    timestamp: Date.now(),
    articles: [...cached.articles, newArticle]
  };
  LS.set(ARTICLES_KEY, payload);
}

export function updateArticle(updatedArticle) {
  const cached = LS.get(ARTICLES_KEY) || { articles: [] };
  const updatedArticles = cached.articles.map(article => 
    article.id === updatedArticle.id ? { ...article, ...updatedArticle } : article
  );
  const payload = {
    timestamp: Date.now(),
    articles: updatedArticles
  };  
  LS.set(ARTICLES_KEY, payload);
}

/*
scratch
event - start
  check localStorage, if empty, download the <daily cache> and save to localStorage
  if full insert <localStorage>
  calculate client timestamp is <daily || local>
event - server live
  check server timestamp > client timestamp
*/