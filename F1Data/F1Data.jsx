import React, { useEffect }   from 'react';
import { useDispatch }        from 'react-redux';
import Helper                 from '../F1Customize/class.Helper.js';
import config_people          from '../F1Customize/config_people.js';


export default () => {
  
  console.logD('DEBUG: L2 : F1-Data');

  const dispatch = useDispatch();
  
  useEffect(() => {

    const urls = Helper.getURLs(true);

    Helper.fetchJSON(urls.articles, undefined, (articles) => {
      articles.reverse();
      dispatch({ type: 'initializeArticles', articles });
    });

    Helper.fetchJSON(urls.users, undefined, (user) => {
      dispatch({ type: 'initializeUser', current: user });
    });

    // place holder for actual data later
    dispatch({ type: 'initializePeople', people: config_people });
  });

  return null

};