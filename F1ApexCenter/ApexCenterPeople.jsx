import { useDispatch, useSelector } from 'react-redux';
import { SVGPeople }                from '../C0Vectors/SVGPeople.jsx';

export default function ApexCenterPeople () {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );
  
  const handleClick = () => dispatch({ type: 'updateMenuPage', current: 'People' });
  const classes = (page === 'People') ? 'apex-option apex-option-on' : 'apex-option';
  
  return (
    <div onClick={handleClick} className={classes}>
      <SVGPeople className='theme-height'/>
    </div>
  );
}
