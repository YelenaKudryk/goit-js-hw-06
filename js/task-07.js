const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};

console.log(refs);

const changeFont = (event) => {
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
    };

refs.inputEl.addEventListener('input', changeFont);
