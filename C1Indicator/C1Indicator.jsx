import './C1Indicator.css';
import { useSelector } from 'react-redux';

export default function C1Indicator() {
  const { ready, heartbeat } = useSelector((state) => state.Server);
  console.logD('DEBUG: Component : C1Indicator ', 'red');
  console.log(ready, heartbeat);
  return (
    <div 
      id="dot-indicator"
      key={heartbeat}
      className={ready ? 'dot-indicator-on' : 'dot-indicator'}
    />
  );
}