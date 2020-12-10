const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientMarkup = ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    console.log(ingredientItem);

    return ingredientItem;
};
const createIngredientsItems = ingredients.map(ingredient =>
createIngredientMarkup(ingredient));
console.log(createIngredientsItems);

const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(...createIngredientsItems);
