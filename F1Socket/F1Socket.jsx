import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFingerPrint, parseMessages } from './F1SocketFunctions.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Socket ');
  const dispatch = useDispatch();

  const socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
  dispatch({type: 'initializeWebSocket', socket: socket});

  // on a connection event / open event, send a fingerprint
  socket.addEventListener('open', (event) => {
    console.logD('DEBUG: WEBSOCKET: socket opened', 'green');
    sendFingerPrint(socket);
  });

  // when receiving a message parse it
  socket.addEventListener('message', (event) => {
    const obj = parseMessages(event.data);
    console.logD('DEBUG: WEBSOCKET: message received', 'green');
    // console.log(obj);
  });

  // https://stackoverflow.com/questions/24213584/in-what-cases-will-a-websocket-close-event-tell-you-wasclean-is-false
  socket.addEventListener('close', (event) => {
    console.logD('DEBUG: WEBSOCKET: closed clean', 'green');
  });

  return null;
};

