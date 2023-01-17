const refs = {
  input: document.querySelector("input"),
  inputMin: document.querySelector("input").min,
  inputMax: document.querySelector("input").max,
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.getElementById("boxes"),
};

refs.createBtn.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

refs.destroyBtn.addEventListener("click", () => {
  while (refs.boxes.firstChild) {
    refs.boxes.removeChild(refs.boxes.firstChild);
  }
});

function createBoxes(amount) {
  const div = [];
  for (let index = 0; index < amount; index += 1) {
    let divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.height = `${30 + index * 10}px`;
    divEl.style.width = `${30 + index * 10}px`;
    div.push(divEl);
  }
  refs.boxes.append(...div);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
