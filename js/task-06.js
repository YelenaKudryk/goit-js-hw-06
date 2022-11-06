const inputEl = document.querySelector('#validation-input');

const checkInput = () => {
    inputEl.classList.remove("invalid", "valid");
    let classEl = "invalid";
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        classEl = "valid";
    }
        inputEl.classList.add(classEl);
};

inputEl.addEventListener('blur', checkInput);
