function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyBackground = document.querySelector('body');

let timerId = null;

startButton.addEventListener('click', clickOnStart);
stopButton.addEventListener('click', clickOnStop);

function getBackgroundCl() {
  bodyBackground.style.backgroundColor = getRandomHexColor();
}

function clickOnStart() {
  timerId = setInterval(getBackgroundCl, 1000);
  startButton.setAttribute('disabled', '');

  return;
}

function clickOnStop() {
  clearInterval(timerId);
  startButton.removeAttribute('disabled');
}
