import React, { useState, useEffect } from 'react';

function Timer() {
  const [secondsRemaining, setSecondsRemaining] = useState(3); // 5 minutes = 300 seconds
  const [timerEnded, setTimerEnded] = useState(false); // To track if the timer has ended

  // Create an audio object (using a simple sound file)
  const sound = new Audio('/alarm.mp3'); // Replace with your audio file path

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(prev => prev - 1);
      } else {
        clearInterval(intervalId);
        setTimerEnded(true); // Set the state to indicate timer has ended
        sound.play(); // Play sound when the timer finishes
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
      {timerEnded}
    </div>
  );
}

export default Timer;
