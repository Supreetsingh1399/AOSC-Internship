const prompt = require("prompt-sync")();
var seconds = prompt("Enter the number of seconds to count down from: ");
function countdown() {
  if (seconds > 0) {
    console.log(seconds);
    seconds--;
  } else {
    console.log("Time's up!");
    clearInterval(last);
  }
}
var last = setInterval(countdown, 1000);
countdown();
