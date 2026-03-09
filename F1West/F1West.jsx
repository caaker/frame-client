import React             from 'react';
import { useSelector }   from  'react-redux';
import Sphere            from  './Sphere.jsx';
import                         './F1West.css';
import React             from 'react';


const F1West = () => {
  const isMoved = useSelector(state => state.MenuLeft.on);
  return (
    <div className={isMoved ? 'left-bar move' : 'left-bar'} id="left-bar">
      <Sphere />
    </div>
  );
};

export default F1West;
