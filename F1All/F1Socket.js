import { sendFingerPrint, receiveMessage } from    './F1SocketFunctions.js';
import Helper                             from    '../F1Helper/class.Helper.js';

function createWebSocket() {
  console.logD('DEBUG: L2 : F1-Socket');
  const URL = Helper.getWebSocketURL();
  const socket = new WebSocket(URL);
  socket.addEventListener('open', () => {
    sendFingerPrint(socket);
  });
  socket.addEventListener('message', (event) => {
    receiveMessage(event.data);
  });
  socket.addEventListener('close', () => {
    // send close message to server  
  });
  return socket;
}

const socket = createWebSocket()
export default socket