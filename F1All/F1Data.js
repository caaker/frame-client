import Helper from                          '../F1All/class.Helper.js';
import store from                           '../_redux/store';
import { initializeUser } from              '../_redux/f-user';
import { initializeArticles } from          '../_redux/a-articles';
import { getArticles, saveArticles } from   '../F1LS/F1LSArticles.js';

(() => {
  const urls = Helper.getURLs(true);
  const articles = getArticles();
  if(articles && articles.length > 0) {
    console.logD('DEBUG: L2 : F1-Data: localStorage utilized: ' + articles.length, '#34A853');
    store.dispatch(initializeArticles(articles));
    console.log(articles[0]);
  } else {
    console.logD('DEBUG: L2 : F1-Data: fetch utilized:', '#34A853');
    Helper.fetchJSON(urls.articles, undefined, (arts) => {
      saveArticles(arts) 
      store.dispatch(initializeArticles(arts));
    });
  } 
  Helper.fetchJSON(urls.users, undefined, (user) => { store.dispatch(initializeUser(user)); });
})();
