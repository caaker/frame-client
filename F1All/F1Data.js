import Helper from                '../F1Helper/class.Helper.js';
import config_people from         '../F1All/config_people.js';
import store from                 '../_redux/store';
import { initializeUser } from    '../_redux/f-user';

function fetchData() {
  console.logD('DEBUG: L2 : F1-Data');
  const urls = Helper.getURLs(true);

  // articles data
  Helper.fetchJSON(urls.articles, undefined, (articles) => {
    store.dispatch({ type: 'initializeArticles', articles });
  });

  // custom user data
  Helper.fetchJSON(urls.users, undefined, (user) => {
    store.dispatch(initializeUser(user));
  });

  // place holder for chat
  store.dispatch({ type: 'initializePeople', people: config_people });
}

fetchData();
export default fetchData;