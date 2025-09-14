import Helper from          '../F1Helper/class.Helper.js';
import config_people from   '../F1Customize/config_people.js';
import store from           '../_redux/store';

function fetchData() {
  console.logD('DEBUG: L2 : F1-Data');
  const urls = Helper.getURLs(true);
  
  Helper.fetchJSON(urls.articles, undefined, (articles) => {
    articles.reverse();
    store.dispatch({ type: 'initializeArticles', articles });
  });
  
  Helper.fetchJSON(urls.users, undefined, (user) => {
    store.dispatch({ type: 'initializeUser', current: user });
  });

  store.dispatch({ type: 'initializePeople', people: config_people });
}

fetchData();
export default fetchData;