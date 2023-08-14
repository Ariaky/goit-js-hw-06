const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = ingredient;
  ingredientsListEl.classList.add('item');
  ingredientsList.appendChild(ingredientsListEl);
});

// Another solution:

//const ingredientsListEl = ingredients
//.map(ingredient => `<li class="item">${ingredient}</li>`)
//.join('');
//ingredientsList.innerHTML = ingredientsListEl;

console.log(ingredientsList);