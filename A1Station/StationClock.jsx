import React, { useEffect, useState }   from 'react';
import { useSelector }                  from 'react-redux';

export default () => {

  console.logD('DEBUG: L3 : F1-Page-Station-Clock ');

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // update clock every minute
    const timerID = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timerID);
  })

  return (
    <div id = "box_clock">
      <p id = "box_clock_inner">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: undefined })}
      </p>
    </div>
  );
};
