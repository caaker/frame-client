import './A1User.css';

import React              from 'react';
import { useSelector }    from 'react-redux';
import ULogin             from './ULogin.jsx';
import UUser              from './UUser.jsx';

export default () => {
  const user = useSelector((state)=>state.User.current);
  console.logD('DEBUG: L3 : F1-Page-User ');
  return (
    <div id='page-user'>
      {!user && <ULogin></ULogin>}
      {user  && <UUser></UUser>}
    </div>
  );
};
