import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import F1ServerTest from './F1ServerTest.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Data');
  const dispatch = useDispatch();

  useEffect(() => {

    const protocol = window.location.protocol;
    const origin = window.location.origin;

    if(protocol === 'file:'){
      console.logD('DEBUG: L2 : F1-Data: file protocol detected: no fetch() available');
      return;
    }
    
    // call cache first to guarantee fast load time
    let cache = true;

    // on a static site call the dynamic server configured for cors
    let baseURL = ''
    if ( origin === 'https://caaker.github.io' ) {
      baseURL = 'https://frame-server-x8qw.onrender.com';
    }

    // articles cache and network locations
    let articlesURL = baseURL + '/articles/get';
    if(cache) {
      articlesURL = './cache.txt'; 
    }
    let usersURL = baseURL + '/users/get';
    const options = { credentials: 'include' };

    
    const fetchArticles = async () => {
      try {
        const response = await fetch(articlesURL, options);
        const articles = await response.json();
        articles.reverse();
        dispatch({ type: 'initializeArticles', articles });
        console.logD(('DEBUG: L2 : F1-Data: fetching from: ' + articlesURL));
      } catch (err) {
        console.logD('DEBUG: F1DATA: fetch() articles failed: ', 'red');
      }
    };
    fetchArticles();

    const fetchUser = async () => {
      try {
        const response = await fetch(usersURL, options);
        const user = await response.json();
        if (user) {
          dispatch({ type: 'initializeUser', current: user });
          console.logD('DEBUG: L2 : F1-Data: user logged in');
        } else {
          console.logD('DEBUG: L2 : F1-Data: user not logged in');
        }
      } catch (err) {
        console.logD('DEBUG: L2 : F1-Data: user:', 'red');
      }
    };
    fetchUser();

  }, [dispatch]);

  // return null
  return <F1ServerTest />;
};
