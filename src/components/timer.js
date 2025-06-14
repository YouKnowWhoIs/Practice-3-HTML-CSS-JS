function timer() {
  const seconds = document.querySelector(".seconds");
  const restartBtn = document.querySelector(".restartBtn");

  let secNum = 60;

  seconds.textContent = `${secNum} сек`;

  let timerSec = setInterval(second, 1000);

  function second() {
    if (secNum == 0) {
      clearInterval(timerSec);
      restartBtn.style.display = "flex";
    } else {
      secNum--;
      seconds.textContent = `${secNum} сек`;
    }
  }

  restartBtn.addEventListener("click", () => {
    clearInterval(timerSec);
    restartBtn.style.display = "none";

    secNum = 60;
    seconds.textContent = `${secNum} сек`;

    timerSec = setInterval(second, 1000);
  });
}

timer();
