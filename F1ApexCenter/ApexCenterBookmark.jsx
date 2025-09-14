import React                        from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGBookmark                  from '../C0Vectors/SVGBookmark.jsx';

export default function ApexCenterBookmark() {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );
  function clicked() {
    dispatch({type: 'updateMenuPage', current: 'Bookmarks' });
  }
  const style = (page === 'Bookmarks') ? 'apex-option apex-option-on' : 'apex-option';
  return (
    <div onClick={clicked} className={style}>
      <SVGBookmark fontSize='30px'/>
    </div>
  );
}
