import './UUser.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default () => {
  let User = useSelector(state => state.User.current);
  const hostname = window.location.hostname;
  let baseURL;
  if ( hostname === 'caaker.github.io' ) {
    baseURL = 'https://frame-server-x8qw.onrender.com';
  } else if ( hostname === 'localhost' ) {
    baseURL = 'http://localhost:3000';
  } else {
    baseURL = '';
  }

  return (
    <div id = "user-container">
      <div id = "user-container-2">
        <div id="user-image-wrapper">
          <img id = "user-image" src={User.pic_url}/>
        </div>
        <p id = "user-name">{User.name}</p>
        <p id = "user-email">{User.email}</p>
        <a id = "user-button" href={baseURL + '/auth/logout'}>Logoff</a>
      </div>
    </div>
  );
};
