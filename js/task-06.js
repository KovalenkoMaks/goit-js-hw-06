const refs = {
  input: document.querySelector("#validation-input"),
  inputLength: document.querySelector("#validation-input").dataset.length,
};
// console.log(refs.input.getAttribute("data-length"));
refs.input.addEventListener("change", (event) => {
  event.currentTarget.value.length === Number(refs.inputLength)
    ? (refs.input.className = "valid")
    : (refs.input.className = "invalid");
});
