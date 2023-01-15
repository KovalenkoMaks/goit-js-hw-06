const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = ingredients.map((ingredient) => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.className = "item";
  return elem;
});
const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsEl);
