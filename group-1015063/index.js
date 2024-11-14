function countdownAndDisplayMessage(seconds, message) {
    var countdownInterval = setInterval(function () {
        if (seconds > 10) {
            if (seconds > 60) {
                var minutes = Math.floor(seconds / 60);
                var remainingSeconds = seconds % 60;
                console.log("Countdown: ".concat(minutes, " minute(s) ").concat(remainingSeconds, " second(s)"));
            }
            else {
                console.log("Countdown: ".concat(seconds, " second(s)"));
            }
        }
        else {
            console.log("Countdown: ".concat('.'.repeat(seconds)));
        }
        seconds--;
        if (seconds === 0) {
            clearInterval(countdownInterval);
            console.log("".concat(message.toUpperCase(), "!"));
        }
    }, 1000);
}
var countdownTime = 70; // Change this to your desired countdown time in seconds
var messageToDisplay = "Time's up"; // Change this to your desired message
countdownAndDisplayMessage(countdownTime, messageToDisplay);
