import React                from 'react';
import { useDispatch }      from 'react-redux';
import config_people        from '../F1Customize/config_people.js';

export default () => {
  console.logD('DEBUG: L2 : F1-Data');
  const dispatch = useDispatch();

  getUser();
  getArticles();
  getMessages();

  function getUser() {
    const options = { credentials: 'include' };
    fetch('/users/get', options)
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        // console.logD('DEBUG: DATA: user: ' + user, 'green');
        if(user) {
          dispatch({type: 'initializeUser', current: user});
          // socket.send({type: 'authenticate', current: user});
        }
      }).catch((err) => {
        console.error('DEBUG: F1DATA: user: ');
        console.error(err);
      });
  }

  function getArticles() {
    const options = { credentials: 'include' };
    fetch('/articles/get', options)
      .then((response) => {
        return response.json();
      })
      .then((articles) => {
        // console.logD('DEBUG: DATA: articles: ' + (articles.length > 10), 'green');
        articles.reverse();
        dispatch({type: 'initializeArticles', articles: articles});
      }).catch((err) => {
        console.error('DEBUG: F1DATA: articles: ');
      });
  }

  function getMessages() {
    dispatch({type: 'initializePeople', people: config_people});
  }

  return null;
};
