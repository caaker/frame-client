import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import F1ServerTest from './F1ServerTest.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Data: ');
  const dispatch = useDispatch();

  useEffect(() => {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    console.logD('DEBUG: L2: F1-DATA: useEffect() running', 'green');
    console.logD(protocol + ' // ' + hostname, 'green')


    // file protocol, no fetch available for security reasons
    if(protocol === 'file:'){
      console.logD('DEBUG: L2 : F1-Data: file protocol detected: no fetch() available');
      return;
    }

    if ( (hostname === 'caaker.github.io') || (hostname === 'localhost') ) {
      console.logD('DEBUG: L2 : F1-Data: static site detected: ', 'green');

      const getArticles = async () => {
        const options = { credentials: 'include' };
        try {
          const response = await fetch('https://frame-server-x8qw.onrender.com/articles/get', options);
          const articles = await response.json();
          if(articles.length === 0){
            console.logD('DEBUG: L2 : F1-Data: articlesInitialized: length = 0: ', 'red');          
          }
          articles.reverse();
          dispatch({ type: 'initializeArticles', articles });
          console.logD('DEBUG: L2 : F1-Data: articlesInitialized: length: ' + articles.length, 'green');

        } catch (err) {
          console.logD('DEBUG: F1DATA: articles: ', 'red');
          // console.logD(err);
        }
      };

      getArticles();
      
      return;
    }

    // fetch user
    const getUser = async () => {
      const options = { credentials: 'include' };
      try {
        const response = await fetch('/users/get', options);
        const user = await response.json();
        if (user) {
          dispatch({ type: 'initializeUser', current: user });
          console.log('DEBUG: L2 : F1-Data: user: Initialized');
          // socket.send({type: 'authenticate', current: user}); // Uncomment if needed
        } else {
          console.logD('DEBUG: L2 : F1-Data: user: not found', 'red');
        }

      } catch (err) {
        console.error('DEBUG: F1DATA: user: ', err);
      }
    };

  }, [dispatch]);

  return <F1ServerTest />;
};








