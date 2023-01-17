function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
console.log(colorValue);

changeColorBtn.addEventListener("click", (event) => {
  colorValue.textContent = getRandomHexColor();
  body.style.backgroundColor = colorValue.textContent;
});
