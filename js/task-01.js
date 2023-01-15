const listCategories = document.querySelector("#categories");
const numberOfCategories = `Number of categories: ${listCategories.childElementCount}`;
console.log(numberOfCategories);
for (const elem of listCategories.children) {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelector("ul").childElementCount}`);
}
