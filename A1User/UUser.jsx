import './UUser.css';
import Helper from '../F1All/class.Helper.js';
import { useSelector } from 'react-redux';

export default function UUser () {
  const User = useSelector(state => state.User.current);

  const baseURL = Helper.getBaseURL();
  const URL = window.location.origin + window.location.pathname;
  const encodedURL = encodeURIComponent(URL);
  const logoutURL = `${baseURL}/auth/logout?redirect_url=${encodedURL}`;
  
  return (
    <div id = "user-container">
      <div id = "user-container-2">
        <div id="user-image-wrapper">
          <img id = "user-image" src={User.pic_url}/>
        </div>
        <p id = "user-name">{User.name}</p>
        <p id = "user-email">{User.email}</p>
        <a id = "user-button" href={logoutURL}>Logoff</a>
      </div>
    </div>
  );
};
