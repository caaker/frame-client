import React, { useEffect }   from 'react';
import { useDispatch }        from 'react-redux';
import F1ServerTest           from './F1ServerTest.jsx';
import Helper                 from '../F1Customize/class.Helper.js';

export default () => {
  console.logD('DEBUG: L2 : F1-Data');
  const dispatch = useDispatch();
  useEffect(() => {
    const urls = Helper.getURLs(true);
    const options = { credentials: 'include' };
    const fetchArticles = async () => {
      try {
        const response = await fetch(urls.articles, options);
        const articles = await response.json();
        articles.reverse();
        dispatch({ type: 'initializeArticles', articles });
        console.logD(('DEBUG: L2 : F1-Data: fetching from: ' + urls.articles));
      } catch (err) {
        console.logD('DEBUG: L2: F1-Data: fetch() articles failed: ' + urls.articles, 'red');
        console.log(err);
      }
    };
    fetchArticles();

    const fetchUser = async () => {
      try {
        const response = await fetch(urls.users, options);
        const user = await response.json();
        if (user) {
          dispatch({ type: 'initializeUser', current: user });
          console.logD('DEBUG: L2 : F1-Data: user logged in');
        } else {
          console.logD('DEBUG: L2 : F1-Data: user not logged in');
        }
      } catch (err) {
        console.logD('DEBUG: L2 : F1-Data: fetch() users failed:' + urls.users, 'red');
      }
    };
    fetchUser();

  }, [dispatch]);

  return null
  // return <F1ServerTest />;
};
