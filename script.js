const matchDay = new Date("2020-05-12 18:00");

function timer() {
  const now = new Date();
  const secondsTo = Math.floor((matchDay.getTime() - now.getTime()) / 1000);
  document.querySelector(".time").textContent = secondsTo + "s";
}

timer();
setInterval(timer, 1000);
