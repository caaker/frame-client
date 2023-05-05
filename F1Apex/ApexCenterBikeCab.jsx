import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGBike         from '../C0Vectors/SVGBike.jsx';


export default () => {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );
  function clicked() {
    dispatch({type: 'updateMenuPage', current: 'BikeCab' });
  }
  const classes = (page === 'BikeCab') ? 'apex-option apex-option-on' : 'apex-option';
  return (
    <div onClick={clicked} className={classes}>
      <SVGBike fontSize='30px'/>
    </div>
  );
};
