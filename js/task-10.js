function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsEl: document.querySelector('#controls'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
};

const onClick = () => {
  const amount = refs.inputEl.valueAsNumber;
  if (!amount) { return }
  const arrayBoxes = createBoxes(amount);
  addArrayBoxes(arrayBoxes);
 };

const createBoxes = (amount) => {
   const arrayBoxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const element = `<div class="box-item" style = "width: ${size}px; height: ${size}px; background: ${getRandomHexColor()}"></div>`;
    arrayBoxes.push(element);
    size += 10;
  }
  return arrayBoxes.join('');
};

const addArrayBoxes = (arrayBoxes = []) => { 
  refs.boxesEl.innerHTML = arrayBoxes;
};

const destroyBoxes = () => { 
  addArrayBoxes();
  refs.inputEl.value = '';
};

refs.btnCreate.addEventListener('click', onClick);
refs.btnDestroy.addEventListener('click', destroyBoxes);
