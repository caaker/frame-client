import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import config_people from '../F1Customize/config_people.js';

export default () => {
  console.logD('DEBUG: L2 : F1-WebsocketData:');
  const dispatch = useDispatch();
  useEffect(() => {
    const getMessages = () => {
      dispatch({ type: 'initializePeople', people: config_people });
    };
    getMessages();
  }, [dispatch]);
  return null;
};











