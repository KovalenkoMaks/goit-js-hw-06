const refs = {
  formEl: document.querySelector(".login-form"),
  emailInput: document.querySelector(".login-form").firstElementChild,
  passInput:
    document.querySelector(".login-form").firstElementChild.nextElementSibling,
};
refs.formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (
    !event.currentTarget.elements[0].value ||
    !event.currentTarget.elements[1].value
  ) {
    return alert("Please, enter your email and password!");
  }
  const formData = {
    email: event.currentTarget.elements[0].value,
    password: event.currentTarget.elements[1].value,
  };
  console.log(formData);
  event.currentTarget.reset();
}
