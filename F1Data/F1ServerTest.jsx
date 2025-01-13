import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ServerTest = () => {
  console.logD('DEBUG: L2 : F1-ServerTest');
  const dispatch = useDispatch();
  const isServerAvailable = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const checkServer = async () => {
      const available = await isServerAvailable('/users/get');
      if (!available) {
        console.logD('DEBUG: L2 : F1-ServerTest: current origin not available');
      } else {
        console.logD('DEBUG: L2 : F1-ServerTest: current origin is available');
      }
    };
    checkServer();
  }, [dispatch]);
  return null;
};

export default ServerTest;