const formEl = document.querySelector('.login-form');

const fillForm = event => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    const checkEmail = email.value.trim();
    const checkPassword = password.value.trim();

    if (checkEmail === "" || checkPassword === "") {
        return alert("все поля должны быть заполнены");
    } console.log(`email: ${email.value}, password: ${password.value}`);

event.currentTarget.reset();
}

formEl.addEventListener('submit', fillForm);
