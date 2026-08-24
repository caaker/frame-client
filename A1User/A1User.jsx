import './A1User.css';
import { useSelector }    from 'react-redux';
import ULogin             from './ULogin.jsx';
import UUser              from './UUser.jsx';

export default function A1User () {
  console.logD('DEBUG: L3 : F1-Page-User ', '#ff0000');
  const user = useSelector((state)=>state.User.current);
  return (
    <div id='page-user'>
      {!user && <ULogin></ULogin>}
      {user  && <UUser></UUser>}
    </div>
  );
};
