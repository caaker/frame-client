import { useSelector }   from  'react-redux';
import Sphere            from  './Sphere.jsx';
import                         './F1West.css';

export default function F1West () {
  console.logD('DEBUG: L2 : F1-West', "#34A853");
  const isMoved = useSelector(state => state.MenuLeft.on);
  return (
    <div className={isMoved ? 'left-bar move' : 'left-bar'} >
      <Sphere />
    </div>
  );
};