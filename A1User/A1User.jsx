import './A1User.css';

import React              from 'react';
import { useSelector }    from 'react-redux';
import ULogin             from './ULogin.jsx';
import UUser              from './UUser.jsx';

export default () => {
  const user = useSelector((state)=>state.User.current);
  const show = user || (window.location.hostname === 'localhost');
  console.logD('DEBUG: L3 : F1-Page-User, ' + user);
  return (
    <div id='page-user'>
      {!show && <ULogin></ULogin>}
      {show  && <UUser></UUser>}
    </div>
  );
};
