import Helper from                          '../F1All/class.Helper.js';
import store from                           '../_redux/store';
import { initializeUser } from              '../_redux/f-user';
import { initializeArticles } from          '../_redux/a-articles';
import { getArticles, saveArticles } from   '../F1LS/F1LSArticles.js';

(() => {
  console.logD('DEBUG: L2 : F1-Data', '#34A853');
  const urls = Helper.getURLs(true);

  // get Articles from localStorage or fetch them
  const articles = getArticles();
  if(articles && articles.length > 0) {
    store.dispatch(initializeArticles(articles));
  } else {
    Helper.fetchJSON(urls.articles, undefined, (arts) => {
      saveArticles(arts) 
      store.dispatch(initializeArticles(arts));
    });
  } 

  Helper.fetchJSON(urls.users, undefined, (user) => { store.dispatch(initializeUser(user)); });

})();
