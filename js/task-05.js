const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
};

const changeName = () => {
    const name = refs.inputEl.value.trim();
    refs.outputEl.textContent = name? name : "Anonymous";
};

refs.inputEl.addEventListener('input', changeName);
