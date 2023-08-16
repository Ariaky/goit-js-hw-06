function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  // const amount = +controls.querySelector('input').value;
  const input = controls.querySelector('input');
  const min = +input.min;
  const max = +input.max;
  const step = +input.step;

  const amount = +input.value;
  if (amount < min || amount > max) {
    return;
  }

  const boxes = [];

  // for(let i = 0; i < amount; i += 1) {
  for (let i = 0; i < amount; i += step) {
    const boxSize = 30 + i * 10;
    const boxColor = getRandomHexColor();

    const box = document.createElement('div');
    box.style.width  = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = boxColor;

    boxes.push(box);
  }

  containerBoxes.append(...boxes);
}

function destroyBoxes() {
  containerBoxes.innerHTML = '';
}