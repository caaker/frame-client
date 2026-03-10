import React             from 'react';
import { useSelector }   from  'react-redux';
import Sphere            from  './Sphere.jsx';
import                         './F1West.css';

export default function F1West () {
  const isMoved = useSelector(state => state.MenuLeft.on);
  return (
    <div className={isMoved ? 'left-bar move' : 'left-bar'} id="left-bar">
      <Sphere />
    </div>
  );
};