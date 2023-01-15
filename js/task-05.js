const refs = {
  inputEl: document.querySelector("#name-input"),
  userName: document.querySelector("#name-output"),
};
refs.inputEl.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.trim() === "") {
    refs.userName.textContent = "Anonymous";
  } else {
    refs.userName.textContent = event.currentTarget.value;
  }
});
