import './UUser.css';
import Helper from '../F1Helper/class.Helper.js';
import { useSelector } from 'react-redux';

export default function UUser () {
  const User = useSelector(state => state.User.current);
  const baseURL = Helper.getBaseURL();

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
