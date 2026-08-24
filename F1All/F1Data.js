import Helper from                '../F1All/class.Helper.js';
import store from                 '../_redux/store';
import { initializeUser } from    '../_redux/f-user';

(() => {

  console.logD('DEBUG: L2 : F1-Data', '#34A853');

  const urls = Helper.getURLs(true);

  Helper.fetchJSON(urls.articles, undefined, (articles) => {
    store.dispatch({ type: 'initializeArticles', articles });
  });

  Helper.fetchJSON(urls.users, undefined, (user) => {
    store.dispatch(initializeUser(user));
  });

})();
