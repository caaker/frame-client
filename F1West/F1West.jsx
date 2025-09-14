import React                        from  'react';
import { useSelector, useDispatch } from  'react-redux';
import                                    './F1West.css';
import Sphere                       from  './Sphere.jsx';


const F1West = () => {
  const isMoved = useSelector(state => state.MenuLeft.on);
  return (
    <div className={isMoved ? 'left-bar move' : 'left-bar'} id="left-bar">
      <Sphere />
    </div>
  );
};

export default F1West;

// older sphere
// <div id="light3"></div>
