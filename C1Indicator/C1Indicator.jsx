import { useSelector } from 'react-redux';
import './C1Indicator.css';

export default function C1Indicator() {
  const { ready, heartbeat } = useSelector((state) => state.Server);
  console.logD('DEBUG: Component : C1Indicator-0 ', 'red');
  console.log(ready, heartbeat);
  return (
    <div 
      key={heartbeat} 
      className={ready ? 'dot-indicator-on' : 'dot-indicator-off'} 
    />
  );
}

