const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const date = "15 Aug 2022";

function countdown() {
  const newDate = new Date(date);
  const currentDate = new Date();

  const totalSeconds = (newDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formantTime(hours);
  minutesEl.innerHTML = formantTime(minutes);
  secondsEl.innerHTML = formantTime(seconds);
}

function formantTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

function modal() {
  const openModal = document.querySelector(".btn.btn2");

  openModal.addEventListener("click", open);

  const modal = document.querySelector("modalwrapper");

  function open() {
    modal.classList.add("active");
  }

  function close() {
    modal.classList.remove("active");
  }
  return {
    open,
    close,
  };
}

modal();
