import './PeopleForm.css';
import React                          from   'react';
import { useSelector, useDispatch }   from   'react-redux';
import PeopleFormInput                from    './PeopleFormInput.jsx';

export default () => {

  const dispatch = useDispatch();
  const current = useSelector((state) => state.PeopleInput.current);
  const socket = useSelector((state) => state.WebSocket.socket);

  function sendMessage() {
    event.preventDefault();

    const user_message = {
      type: 'echo',
      message: current,
      from: 'moo1.com',
      to: 'moo2.com'
    };

    console.log('DEBUG: message sent: ', current);

    // send message to the socket server
    socket.send(JSON.stringify(user_message));

    // send message to redux
    dispatch({type: 'addMessage', message: user_message});

    // this is a controlled form, set to empty on send
    dispatch({type: 'updatePeopleInput', current: ''});
  }

  return (
    <div id="pdiv">
      <form id="pdiv-form"
        onSubmit={sendMessage}
        autoComplete="off"
      >
        <PeopleFormInput/>
      </form>
    </div>
  );
};
