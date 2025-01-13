import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import F1ServerTest from './F1ServerTest.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Data');
  const dispatch = useDispatch();

  useEffect(() => {

    const protocol = window.location.protocol;
    const hostname = window.location.hostname;

    if(protocol === 'file:'){
      console.logD('DEBUG: L2 : F1-Data: file protocol detected: no fetch() available');
      return;
    }

    let baseURL;

    if ( hostname === 'caaker.github.io' ) {
      baseURL = 'https://frame-server-x8qw.onrender.com';
      console.logD('DEBUG: L2 : F1-Data: fetching from: ' + baseURL);

    } else if ( hostname === 'localhost' ) {
      baseURL = 'http://localhost:3000';
      console.logD('DEBUG: L2 : F1-Data: fetching from: ' + baseURL);

    } else if ( hostname === 'frame-server-x8qw.onrender.com' ) {
      baseURL = 'https://frame-server-x8qw.onrender.com';
      console.logD('DEBUG: L2 : F1-Data: fetching from: ' + baseURL);

    } else {
      baseURL = 'https://frame-server-x8qw.onrender.com';
      console.logD(('DEBUG: L2 : F1-Data: fetching from fallback: ' + baseURL), 'red');
    }

    const fetchArticles = async () => {
      const options = { credentials: 'include' };
      try {
        const response = await fetch(baseURL + '/articles/get', options);
        const articles = await response.json();
        if(articles.length === 0) {
          console.logD('DEBUG: L2 : F1-Data: articlesInitialized: length = 0: ', 'red');          
        }
        articles.reverse();
        dispatch({ type: 'initializeArticles', articles });
        console.logD('DEBUG: L2 : F1-Data: articlesInitialized: length: ' + articles.length, 'green');
      } catch (err) {
        console.logD('DEBUG: F1DATA: fetch() articles failed: ', 'red');
      }
    };
    fetchArticles();

    const fetchUser = async () => {
      const options = { credentials: 'include' };
      try {
        const response = await fetch(baseURL + '/users/get', options);
        const user = await response.json();
        if (user) {
          dispatch({ type: 'initializeUser', current: user });
          console.logD('DEBUG: L2 : F1-Data: user logged in');
          // socket.send({type: 'authenticate', current: user}); // Uncomment if needed
        } else {
          console.logD('DEBUG: L2 : F1-Data: user not logged in');
        }
      } catch (err) {
        console.logD('DEBUG: L2 : F1-Data: user:', 'red');
      }
    };
    fetchUser();

  }, [dispatch]);

  return null
  // return <F1ServerTest />;
};
