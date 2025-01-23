import React, { useEffect }   from 'react';
import { useDispatch }        from 'react-redux';
import F1ServerTest           from './F1ServerTest.jsx';
import Helper                 from '../F1Customize/class.Helper.js';

export default () => {
  
  console.logD('DEBUG: L2 : F1-Data');
  const dispatch = useDispatch();
  
  useEffect(() => {

    const urls = Helper.getURLs(true);

    Helper.fetchJSON(urls.articles, options, (articles) => {
      articles.reverse();
      dispatch({ type: 'initializeArticles', articles });
    });

    Helper.fetchJSON(urls.users, options, (user) => {
      dispatch({ type: 'initializeUser', current: user });
    });

  }, [dispatch]);

  return null

};