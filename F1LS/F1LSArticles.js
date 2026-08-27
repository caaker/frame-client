import { LS } from './F1LS';
const ARTICLES_KEY = 'cached_articles';

export function saveArticles(articles) {
  const payload = {
    timestamp: Date.now(),
    articles: articles
  };
  LS.set(ARTICLES_KEY, payload);
}

export function getAllArticles() {
  const cached = LS.get(ARTICLES_KEY);
  return cached && cached.articles ? cached.articles : [];
}

export function addArticle(newArticle) {
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

export function deleteArticle(articleId) {
  const cached = LS.get(ARTICLES_KEY) || { articles: [] };
  const updatedArticles = cached.articles.filter(article => article.id !== articleId);
  const payload = {
    timestamp: Date.now(),
    articles: updatedArticles
  };  
  LS.set(ARTICLES_KEY, payload);
}