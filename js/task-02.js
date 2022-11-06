const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const makeIl = ingredients.map(ingredient => {
  const newItemEl = document.createElement('li');
  newItemEl.classList.add('item');
  newItemEl.textContent = ingredient;
  return newItemEl;
});

listIngredients.append(...makeIl);
console.log(listIngredients)
