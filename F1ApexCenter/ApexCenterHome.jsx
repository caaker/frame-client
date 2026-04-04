import { useDispatch, useSelector } from 'react-redux';
import { SVGHome }                      from '../C0Vectors/SVGHome.jsx';

export default function ApexCenterHome() {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );

  const handleClick = () => dispatch({ type: 'updateMenuPage', current: 'Articles' });
  const classes = (page === 'Articles') ? 'apex-option apex-option-on' : 'apex-option';
  
  return (
    <div onClick={handleClick} className={classes}>
      <SVGHome className='theme-height'/>
    </div>
  );
}
