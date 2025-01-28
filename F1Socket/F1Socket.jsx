import React, { useEffect }               from    'react';
import { useDispatch }                    from    'react-redux';
import { sendFingerPrint, parseMessages } from    './F1SocketFunctions.jsx';
import Helper                             from    '../F1Customize/class.Helper.js';

export default () => {
  console.logD('DEBUG: L2 : F1-Socket:');
  const dispatch = useDispatch();

  function ws() {
    const URL = Helper.getWebSocketURL();
    const socket = new WebSocket(URL);

    dispatch({ type: 'initializeWebSocket', socket });

    socket.addEventListener('open', () => {
      console.logD('DEBUG: L2 : F1Socket: Event: open', 'green');
      sendFingerPrint(socket);
    });

    socket.addEventListener('message', (event) => {
      console.logD('DEBUG: L2 : F1-Socket: Event: message', 'green');
      const obj = parseMessages(event.data);
    });

    socket.addEventListener('close', () => {
      console.logD('DEBUG: L2 : F1-Socket: Event: close', 'green');
    });

    return () => {
      socket.close();
    };    
  }

  useEffect(() => {
    ws();
  });

  return null;
};
