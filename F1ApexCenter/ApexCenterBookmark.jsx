import { useDispatch, useSelector } from 'react-redux';
import { SVGBookmark }                  from '../C0Vectors/SVGBookmark.jsx';

export default function ApexCenterBookmark() {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );

  const handleClick = () => dispatch({ type: 'updateMenuPage', current: 'Bookmarks' });
  const classes = (page === 'Bookmarks') ? 'apex-option apex-option-on' : 'apex-option';
  
  return (
    <div onClick={handleClick} className={classes}>
      <SVGBookmark className='theme-height'/>
    </div>
  );
}
