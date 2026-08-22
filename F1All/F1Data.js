import Helper from                '../F1All/class.Helper.js';
import store from                 '../_redux/store';
import { initializeUser } from    '../_redux/f-user';

function fetchData() {
  console.logD('DEBUG: L2 : F1-Data', '#34A853');
  const urls = Helper.getURLs(true);

  // articles data
  Helper.fetchJSON(urls.articles, undefined, (articles) => {
    console.log('Helper.fetchJSON() fetching and dispatching to Redux ', 'URL: ' + urls.articles, articles);
    store.dispatch({ type: 'initializeArticles', articles });
  });

  // custom user data
  Helper.fetchJSON(urls.users, undefined, (user) => {
    store.dispatch(initializeUser(user));
  });

}

fetchData();
export default fetchData;