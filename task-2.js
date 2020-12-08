const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//console.log(ingredients);
const createIngredientMarkup = ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    console.log(ingredientItem);

    return ingredientItem;
};
 //createIngredientMarkup(ingredients);

const createIngredientsItems = ingredients.map(ingredient =>
createIngredientMarkup(ingredient));
console.log(createIngredientsItems);

const ingredientsListRef = document.querySelector('#ingredients');
//console.log(ingredientsListRef);

ingredientsListRef.append(...createIngredientsItems);
