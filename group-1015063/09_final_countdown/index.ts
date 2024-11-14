function countdownAndDisplayMessage(seconds: number, message: string) {
    const countdownInterval = setInterval(() => {
      if (seconds > 10) {
        if (seconds > 60) {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          console.log(`Countdown: ${minutes} minute(s) ${remainingSeconds} second(s)`);
        } else {
          console.log(`Countdown: ${seconds} second(s)`);
        }
      } else {
        console.log(`Countdown: ${'.'.repeat(seconds)}`);
      }
  
      seconds--;
  
      if (seconds === 0) {
        clearInterval(countdownInterval);
        console.log(`${message.toUpperCase()}!`);
      }
    }, 1000);
  }
  
  const countdownTime = 70; // Change this to your desired countdown time in seconds
  const messageToDisplay = "Time's up"; // Change this to your desired message
  
  countdownAndDisplayMessage(countdownTime, messageToDisplay);
  