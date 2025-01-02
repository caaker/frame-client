import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import config_people from '../F1Customize/config_people.js';

export default () => {
  console.logD('DEBUG: L2 : F1-Data');
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data
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

    // Fetch articles
    const getArticles = async () => {
      const options = { credentials: 'include' };
      try {
        const response = await fetch('/articles/get', options);
        const articles = await response.json();
        if(articles.length === 0){
          console.logD('DEBUG: L2 : F1-Data: articlesInitialized: length = 0: ', 'red');          
        }
        articles.reverse();
        dispatch({ type: 'initializeArticles', articles });
        console.logD('DEBUG: L2 : F1-Data: articlesInitialized: length: ' + articles.length);

      } catch (err) {
        console.error('DEBUG: F1DATA: articles: ', err);
      }
    };

    // Initialize messages (no async required)
    const getMessages = () => {
      dispatch({ type: 'initializePeople', people: config_people });
    };

    // Call all the functions
    getUser();
    getArticles();
    getMessages();
  }, [dispatch]); // Dependency array ensures this effect runs only once

  return null;
};
