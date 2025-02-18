import React, { useEffect }               from    'react';
import { useDispatch }                    from    'react-redux';
import { sendFingerPrint, parseMessages } from    './F1SocketFunctions.jsx';
import Helper                             from    '../F1Customize/class.Helper.js';

// note logD is a custom log function
export default () => {
  console.logD('DEBUG: L2 : F1-Socket');
  const dispatch = useDispatch();

  function ws() {
    const URL = Helper.getWebSocketURL();
    const socket = new WebSocket(URL);

    // redux is used to manage the socket connection
    dispatch({ type: 'initializeWebSocket', socket });

    socket.addEventListener('open', () => {
      console.logD('DEBUG: L2 : F1-Socket: Event: open', 'green');
      sendFingerPrint(socket);
    });

    socket.addEventListener('message', (event) => {
      console.logD('DEBUG: L2 : F1-Socket: Event: message', 'green');
      parseMessages(event.data);
    });

    socket.addEventListener('close', () => {
      console.logD('DEBUG: L2 : F1-Socket: Event: close', 'green');
    });

    // closing the socket automatically removes all the event listeners
    function cleanUp() {
      socket.close();
    }

    return cleanUp;
  }

  // return value runs on the unmount
  useEffect(() => {
    return ws();

    // empty array gurantees useEffect only runs once, creating only 1 WebSocket
  }, []);

  return null;
};
