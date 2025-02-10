
// currently the fingerprint is just the user agent
export const sendFingerPrint = function(socket) {
  sendType('fingerprint', window.navigator.userAgent, socket);
};

export const parseMessages = function(json) {

  // this is a stub to fill out later
  let obj = JSON.parse(json);
  if(obj.type === 'tweet') {

  }
  return obj;
};

export const sendType = function(type, message, socket) {
  const send = {
    type: type,
    message: message
  };
  socket.send(JSON.stringify(send));
};

export default {parseMessages, sendFingerPrint, sendType};