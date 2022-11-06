const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
};

let counterValue = 0;

const counter = () => { 
    refs.valueEl.textContent = counterValue;
    };

const handleDecrement = () => {
    counterValue -= 1;
  counter();
};

const handleIncrement = () => {
    counterValue += 1;
 counter();
};

refs.decrementBtn.addEventListener('click', handleDecrement);
refs.incrementBtn.addEventListener('click', handleIncrement);





