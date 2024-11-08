import React, { useState, useEffect } from 'react';

function Timer() {
    const [secondsRemaining, setSecondsRemaining] = useState(300); // 5 minutes = 300 seconds

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (secondsRemaining > 0) {
          setSecondsRemaining(secondsRemaining - 1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [secondsRemaining]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div>
        <h1>{formatTime(secondsRemaining)}</h1>
      </div>
    );
  }
  
  export default Timer;