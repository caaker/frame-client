import React                          from      'react';
import { useSelector, useDispatch }   from 'react-redux';
import                                './F1West.css'

const F1West: React.FC = () => {

  const isMoved = useSelector((state: any) => state.MenuLeft.on);

  return (
    <div className={isMoved ? 'left-bar move' : 'left-bar'} id="left-bar">
      <div id="light3"></div>
    </div>
  );
};

export default F1West;