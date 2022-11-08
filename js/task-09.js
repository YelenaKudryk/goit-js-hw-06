function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
  bodyEl: document.querySelector('body'),
};

const changeColorBody = () => {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.textEl.textContent = color;
  };

refs.buttonEl.addEventListener('click', changeColorBody);

