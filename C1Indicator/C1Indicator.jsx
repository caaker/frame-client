import './C1Indicator.css';
import { useSelector } from 'react-redux'; // The Hook

export default function C1Indicator() {
  const server_ready = useSelector((state) => state.Server.ready);
  return (
    <div id="dot-indicator"
         className={server_ready ? 'dot-indicator-on' : 'dot-indicator'}
    >
    </div>
  );
};
