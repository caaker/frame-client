export const sendFingerPrint = function(socket) {
  sendMessage('fingerprint', window.navigator.userAgent, socket);
};
export const sendMessage = function(type, message, socket) {
  const send = {
    type: type,
    message: message
  };
  socket.send(JSON.stringify(send));
};
export const receiveMessage = function(json) {
  let obj = JSON.parse(json);
  if(obj.type === 'tweet') {
  }
  return obj;
};

export default {receiveMessage, sendFingerPrint, sendMessage};