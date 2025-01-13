import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendFingerPrint, parseMessages } from './F1SocketFunctions.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Socket');
  const dispatch = useDispatch();


  function ws(protocol) {
    const socket = new WebSocket(protocol);

    // Dispatch WebSocket initialization to Redux store
    dispatch({ type: 'initializeWebSocket', socket });

    // WebSocket event listeners
    socket.addEventListener('open', () => {
      // console.logD('DEBUG: F1-Socket: socket opened');
      sendFingerPrint(socket);
    });

    socket.addEventListener('message', (event) => {
      const obj = parseMessages(event.data);
      // console.logD('DEBUG: F1-Socket: message received');
    });

    socket.addEventListener('close', () => {
      // console.logD('DEBUG: F1-Socket: closed cleanly');
    });

    // Cleanup WebSocket on component unmount
    return () => {
      // console.logD('DEBUG: F1-Socket: cleaning up socket');
      socket.close();
    };    
  }

  // for static site with no websockets
  useEffect(() => {
    const protocol = location.origin.replace(/^http/, 'ws');

    // static_site_check
    if(location.protocol !== 'file:') {
      return ws(protocol)
    }

  }, [dispatch]); // dependency array ensures this runs only once

  return null; // no UI to render
};
