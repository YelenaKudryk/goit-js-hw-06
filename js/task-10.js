function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),

};

console.log(refs)


  // <div id="controls">
  //     <input type="number" min="1" max="100" step="1" />
  //     <button type="button" data-create>Create</button>
  //     <button type="button" data-destroy>Destroy</button>
  //   </div>

  //   <div id="boxes"></div>
