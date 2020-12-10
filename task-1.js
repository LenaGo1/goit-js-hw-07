const parentElement = document.querySelector("#categories");
const numberOfCategories = parentElement.children.length;
const itemLiRef = document.querySelectorAll('.item');
console.log(`в списке ${numberOfCategories} категории`);

itemLiRef.forEach((item) => {
    const title = item.firstElementChild.textContent;
    const numbers = item.lastElementChild.children.length;
    console.log(`Категория:  ${title} \nКоличество элементов: ${numbers}`);

});
