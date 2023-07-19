const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (timeInSeconds) => {
    clearInterval(timer);
    timerEl.innerHTML = `00:00:00`;
    timer = setInterval(function () {
        if (timeInSeconds <= 0) {
            timerEl.innerHTML = `00:00:00`;
            clearInterval(timer);
            alert("Время закончилось");
        } else {
            seconds = timeInSeconds % 60;
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            minutes = Math.trunc(timeInSeconds / 60 % 60);
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            hour = Math.trunc(timeInSeconds / 60 / 60 % 60);
            if (hour < 10) {
                hour = `0${hour}`;
            }
            let strTimer = `${hour}:${minutes}:${seconds}`;
            timerEl.innerHTML = strTimer;
        }
        --timeInSeconds;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/\D/,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});