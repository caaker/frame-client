import React, { useEffect }               from    'react';
import { useDispatch }                    from    'react-redux';
import { sendFingerPrint, parseMessages } from    './F1SocketFunctions.js';
import Helper                             from    '../F1Helper/class.Helper.js';
import store                              from    '../_redux/store';

function createWebSocket() {

  console.logD('DEBUG: L2 : F1-Socket');

  const URL = Helper.getWebSocketURL();
  const socket = new WebSocket(URL);

  store.dispatch({ type: 'initializeWebSocket', socket });

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

}

createWebSocket()
export default createWebSocket

// socket.close();
