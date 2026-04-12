import { useEffect, useState }   from 'react';

export default function StationClock() {
  console.logD('DEBUG: L3 : F1-Page-Station-Clock ');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div id = "box_clock">
      <p id = "box_clock_inner">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  );
};
