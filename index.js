const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;

const ifOneDigit = (number) => {
    if (number < 10) {
        number = `0${number}`;
    }
    return number;
};

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
            seconds = ifOneDigit(timeInSeconds % 60);
            minutes = ifOneDigit(Math.trunc(timeInSeconds / 60 % 60));
            hour = ifOneDigit(Math.trunc(timeInSeconds / 60 / 60 % 60));
            timerEl.innerHTML = `${hour}:${minutes}:${seconds}`;
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