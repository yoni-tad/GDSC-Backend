const timer = document.getElementById("timer");
const inputNumber = document.getElementById("number");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", (e) => {
  var remainSec = inputNumber.value;
  if (remainSec > 0) {
    let intervalId = setInterval(() => {
      if (remainSec < 0) {
        clear();
        return;
      }
      timer.textContent = remainSec;
      remainSec -= 1;
    }, 1000);

    function clear() {
      alert("Time's up!");
      clearInterval(intervalId);
    }
  } else {
    alert("Please enter valid number");
  }
});
