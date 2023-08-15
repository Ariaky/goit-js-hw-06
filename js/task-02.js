const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(ingredient => {
//ingredients.forEach(ingredient => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = ingredient;
  ingredientsListEl.classList.add('item');
  //ingredientsList.appendChild(ingredientsListEl);
  return ingredientsListEl;
});
ingredientsList.append(...ingredientsEl);

//console.log(ingredientsList);

// Another solution:
//const ingredientsListEl = ingredients
//.map(ingredient => `<li class="item">${ingredient}</li>`)
//.join('');
//ingredientsList.innerHTML = ingredientsListEl;