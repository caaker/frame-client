import { useNavigation }        from './useNavigation.js';
import { SVGPeople }            from '../C0Vectors/SVGPeople.jsx';

export default function ApexCenterUser() {
  const { handleClick, classes } = useNavigation('People');
  return (
    <div onClick={handleClick} className={classes}>
      <SVGPeople className='theme-height' />
    </div>
  );
}